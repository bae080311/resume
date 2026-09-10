import assert from "node:assert/strict";
import test from "node:test";
import type { ResumeData, ResumeVariant } from "../src/data/types";
import { activities, awards, projects, skillGroups } from "../src/data/resumeData";
import { validateVariant } from "./validate-resume";

const baseData: ResumeData = { projects, skillGroups, awards, activities };

function validVariant(): ResumeVariant {
  return {
    meta: {
      company: "테스트 회사",
      role: "Frontend Developer",
      createdAt: "2026-08-24",
      changes: ["채용공고 관련도에 따라 프로젝트 순서를 조정"],
    },
    data: structuredClone(baseData),
  };
}

test("원본 사실을 유지한 variant를 허용한다", () => {
  const variant = validVariant();
  variant.data.projects.reverse();
  variant.data.skillGroups[0].skills.reverse();

  assert.deepEqual(validateVariant(variant, baseData), []);
});

test("원본에 없는 프로젝트를 거부한다", () => {
  const variant = validVariant();
  variant.data.projects[0].title = "만들어낸 프로젝트";

  const issues = validateVariant(variant, baseData);
  assert.ok(issues.some((issue) => issue.message.includes("원본에 없는 프로젝트")));
});

test("프로젝트 섹션이 2개 미만이면 거부한다", () => {
  const variant = validVariant();
  variant.data.projects[0].sections = variant.data.projects[0].sections.slice(0, 1);

  const issues = validateVariant(variant, baseData);
  assert.ok(issues.some((issue) => issue.message.includes("최소 2개 섹션")));
});

test("원본에 없는 스킬을 거부한다", () => {
  const variant = validVariant();
  variant.data.skillGroups[0].skills.push("Imaginary.js");

  const issues = validateVariant(variant, baseData);
  assert.ok(issues.some((issue) => issue.path.endsWith(".skills")));
});

test("수상 정보 변경을 거부한다", () => {
  const variant = validVariant();
  variant.data.awards[0].title = "대상";

  const issues = validateVariant(variant, baseData);
  assert.ok(issues.some((issue) => issue.path === "data.awards"));
});
