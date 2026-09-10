export const BRANCH_TYPES = [
  "feat",
  "fix",
  "docs",
  "refactor",
  "test",
  "chore",
] as const;

export type BranchType = (typeof BRANCH_TYPES)[number];

export function isProtectedBranch(branch: string): boolean {
  return branch === "main" || branch === "master";
}

export function createBranchName(type: string | undefined, topic: string | undefined): string {
  if (!type || !BRANCH_TYPES.includes(type as BranchType)) {
    throw new Error(`브랜치 종류는 다음 중 하나여야 합니다: ${BRANCH_TYPES.join(", ")}`);
  }

  if (!topic || !/^[a-z0-9][a-z0-9-]*$/.test(topic)) {
    throw new Error("브랜치 주제는 소문자 kebab-case로 작성해야 합니다. 예: agent-validation");
  }

  return `${type}/${topic}`;
}
