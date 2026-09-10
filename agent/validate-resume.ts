import type { ResumeData, ResumeVariant } from "../src/data/types";

export interface ValidationIssue {
  path: string;
  message: string;
}

export class ResumeValidationError extends Error {
  readonly issues: ValidationIssue[];

  constructor(issues: ValidationIssue[]) {
    super(
      `이력서 검증 실패 (${issues.length}건)\n${issues
        .map((issue) => `- ${issue.path}: ${issue.message}`)
        .join("\n")}`
    );
    this.name = "ResumeValidationError";
    this.issues = issues;
  }
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function isNonEmptyString(value: unknown): value is string {
  return typeof value === "string" && value.trim().length > 0;
}

function hasSameMembers(actual: string[], expected: string[]): boolean {
  if (actual.length !== expected.length) return false;
  const actualSet = new Set(actual);
  return actualSet.size === actual.length && expected.every((item) => actualSet.has(item));
}

function isJsonEqual(actual: unknown, expected: unknown): boolean {
  return JSON.stringify(actual) === JSON.stringify(expected);
}

function validateStringArray(
  value: unknown,
  path: string,
  issues: ValidationIssue[],
  allowEmpty = false
): value is string[] {
  if (!Array.isArray(value)) {
    issues.push({ path, message: "문자열 배열이어야 합니다." });
    return false;
  }

  if (!allowEmpty && value.length === 0) {
    issues.push({ path, message: "최소 1개 항목이 필요합니다." });
  }

  value.forEach((item, index) => {
    if (!isNonEmptyString(item)) {
      issues.push({ path: `${path}[${index}]`, message: "비어 있지 않은 문자열이어야 합니다." });
    }
  });

  return value.every(isNonEmptyString);
}

export function validateResumeData(candidate: unknown, base: ResumeData): ValidationIssue[] {
  const issues: ValidationIssue[] = [];

  if (!isRecord(candidate)) {
    return [{ path: "data", message: "객체여야 합니다." }];
  }

  validateProjects(candidate.projects, base, issues);
  validateSkillGroups(candidate.skillGroups, base, issues);

  if (!isJsonEqual(candidate.awards, base.awards)) {
    issues.push({ path: "data.awards", message: "수상 정보는 원본과 동일해야 합니다." });
  }

  if (!isJsonEqual(candidate.activities, base.activities)) {
    issues.push({ path: "data.activities", message: "활동 정보는 원본과 동일해야 합니다." });
  }

  return issues;
}

function validateProjects(
  value: unknown,
  base: ResumeData,
  issues: ValidationIssue[]
): void {
  if (!Array.isArray(value)) {
    issues.push({ path: "data.projects", message: "배열이어야 합니다." });
    return;
  }

  if (value.length !== base.projects.length) {
    issues.push({
      path: "data.projects",
      message: `원본 프로젝트 ${base.projects.length}개를 모두 유지해야 합니다.`,
    });
  }

  const seenTitles = new Set<string>();

  value.forEach((project, projectIndex) => {
    const path = `data.projects[${projectIndex}]`;
    if (!isRecord(project)) {
      issues.push({ path, message: "프로젝트 객체여야 합니다." });
      return;
    }

    if (!isNonEmptyString(project.title)) {
      issues.push({ path: `${path}.title`, message: "프로젝트 제목이 필요합니다." });
      return;
    }

    if (seenTitles.has(project.title)) {
      issues.push({ path: `${path}.title`, message: "프로젝트 제목이 중복되었습니다." });
      return;
    }
    seenTitles.add(project.title);

    const baseProject = base.projects.find((item) => item.title === project.title);
    if (!baseProject) {
      issues.push({ path: `${path}.title`, message: "원본에 없는 프로젝트입니다." });
      return;
    }

    (["period", "description", "role", "team", "github"] as const).forEach((field) => {
      if (project[field] !== baseProject[field]) {
        issues.push({
          path: `${path}.${field}`,
          message: "프로젝트 식별 정보는 원본과 동일해야 합니다.",
        });
      }
    });

    if (validateStringArray(project.techs, `${path}.techs`, issues)) {
      if (!hasSameMembers(project.techs, baseProject.techs)) {
        issues.push({
          path: `${path}.techs`,
          message: "기술은 순서만 변경할 수 있으며 추가하거나 삭제할 수 없습니다.",
        });
      }
    }

    validateSections(project.sections, baseProject.sections, path, issues);
  });

  base.projects.forEach((project) => {
    if (!seenTitles.has(project.title)) {
      issues.push({ path: "data.projects", message: `프로젝트가 누락되었습니다: ${project.title}` });
    }
  });
}

function validateSections(
  value: unknown,
  baseSections: ResumeData["projects"][number]["sections"],
  projectPath: string,
  issues: ValidationIssue[]
): void {
  const path = `${projectPath}.sections`;
  if (!Array.isArray(value)) {
    issues.push({ path, message: "배열이어야 합니다." });
    return;
  }

  if (value.length < 2) {
    issues.push({ path, message: "프로젝트마다 최소 2개 섹션을 유지해야 합니다." });
  }

  const seenNames = new Set<string>();
  value.forEach((section, sectionIndex) => {
    const sectionPath = `${path}[${sectionIndex}]`;
    if (!isRecord(section)) {
      issues.push({ path: sectionPath, message: "섹션 객체여야 합니다." });
      return;
    }

    if (!isNonEmptyString(section.name)) {
      issues.push({ path: `${sectionPath}.name`, message: "섹션 이름이 필요합니다." });
      return;
    }

    if (seenNames.has(section.name)) {
      issues.push({ path: `${sectionPath}.name`, message: "섹션 이름이 중복되었습니다." });
      return;
    }
    seenNames.add(section.name);

    const baseSection = baseSections.find((item) => item.name === section.name);
    if (!baseSection) {
      issues.push({ path: `${sectionPath}.name`, message: "원본에 없는 섹션입니다." });
      return;
    }

    if (section.link !== baseSection.link) {
      issues.push({ path: `${sectionPath}.link`, message: "섹션 링크는 변경할 수 없습니다." });
    }

    validateStringArray(section.items, `${sectionPath}.items`, issues);
  });
}

function validateSkillGroups(
  value: unknown,
  base: ResumeData,
  issues: ValidationIssue[]
): void {
  if (!Array.isArray(value)) {
    issues.push({ path: "data.skillGroups", message: "배열이어야 합니다." });
    return;
  }

  if (value.length !== base.skillGroups.length) {
    issues.push({
      path: "data.skillGroups",
      message: `원본 스킬 그룹 ${base.skillGroups.length}개를 모두 유지해야 합니다.`,
    });
  }

  const seenCategories = new Set<string>();
  value.forEach((group, groupIndex) => {
    const path = `data.skillGroups[${groupIndex}]`;
    if (!isRecord(group)) {
      issues.push({ path, message: "스킬 그룹 객체여야 합니다." });
      return;
    }

    if (!isNonEmptyString(group.category)) {
      issues.push({ path: `${path}.category`, message: "카테고리가 필요합니다." });
      return;
    }

    if (seenCategories.has(group.category)) {
      issues.push({ path: `${path}.category`, message: "스킬 카테고리가 중복되었습니다." });
      return;
    }
    seenCategories.add(group.category);

    const baseGroup = base.skillGroups.find((item) => item.category === group.category);
    if (!baseGroup) {
      issues.push({ path: `${path}.category`, message: "원본에 없는 스킬 그룹입니다." });
      return;
    }

    if (validateStringArray(group.skills, `${path}.skills`, issues)) {
      if (!hasSameMembers(group.skills, baseGroup.skills)) {
        issues.push({
          path: `${path}.skills`,
          message: "스킬은 순서만 변경할 수 있으며 추가하거나 삭제할 수 없습니다.",
        });
      }
    }
  });
}

export function assertValidResumeData(
  candidate: unknown,
  base: ResumeData
): asserts candidate is ResumeData {
  const issues = validateResumeData(candidate, base);
  if (issues.length > 0) throw new ResumeValidationError(issues);
}

export function validateVariant(candidate: unknown, base: ResumeData): ValidationIssue[] {
  if (!isRecord(candidate)) {
    return [{ path: "variant", message: "객체여야 합니다." }];
  }

  const issues = validateResumeData(candidate.data, base);
  const meta = candidate.meta;
  if (!isRecord(meta)) {
    issues.push({ path: "meta", message: "객체여야 합니다." });
    return issues;
  }

  (["company", "role", "createdAt"] as const).forEach((field) => {
    if (!isNonEmptyString(meta[field])) {
      issues.push({ path: `meta.${field}`, message: "비어 있지 않은 문자열이어야 합니다." });
    }
  });

  validateStringArray(meta.changes, "meta.changes", issues);
  return issues;
}

export function assertValidVariant(
  candidate: unknown,
  base: ResumeData
): asserts candidate is ResumeVariant {
  const issues = validateVariant(candidate, base);
  if (issues.length > 0) throw new ResumeValidationError(issues);
}
