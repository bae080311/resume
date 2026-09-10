#!/usr/bin/env tsx

import { execFileSync } from "node:child_process";
import { createBranchName, isProtectedBranch } from "./git-rules";

function git(...args: string[]): string {
  return execFileSync("git", args, { encoding: "utf-8" }).trim();
}

function main(): void {
  const [type, topic] = process.argv.slice(2);
  const branchName = createBranchName(type, topic);
  const currentBranch = git("branch", "--show-current");

  if (!currentBranch) {
    throw new Error("detached HEAD 상태에서는 작업 브랜치를 만들 수 없습니다.");
  }

  if (!isProtectedBranch(currentBranch)) {
    throw new Error(
      `현재 ${currentBranch} 브랜치에서 작업 중입니다. 기존 작업을 마친 뒤 main으로 돌아가세요.`
    );
  }

  if (git("status", "--porcelain")) {
    throw new Error("작업 트리가 깨끗하지 않습니다. 기존 변경을 먼저 커밋하거나 정리하세요.");
  }

  execFileSync("git", ["switch", "-c", branchName], { stdio: "inherit" });
  console.log(`✓ 작업 브랜치 생성 완료: ${branchName}`);
}

try {
  main();
} catch (error) {
  console.error(`브랜치 생성 실패: ${(error as Error).message}`);
  console.error("사용법: npm run branch -- <feat|fix|docs|refactor|test|chore> <topic>");
  process.exitCode = 1;
}
