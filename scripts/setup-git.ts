#!/usr/bin/env tsx

import { execFileSync } from "node:child_process";

function gitConfig(key: string, value: string): void {
  execFileSync("git", ["config", "--local", key, value], { stdio: "inherit" });
}

try {
  execFileSync("git", ["rev-parse", "--show-toplevel"], { stdio: "ignore" });
  gitConfig("core.hooksPath", ".githooks");
  gitConfig("commit.template", ".gitmessage");
  console.log("✓ Git 규칙 설치 완료");
  console.log("  - main/master 직접 커밋 차단");
  console.log("  - staged diff 및 npm run check 실행");
  console.log("  - Conventional Commits 템플릿 적용");
} catch (error) {
  console.error(`Git 규칙 설치 실패: ${(error as Error).message}`);
  process.exitCode = 1;
}
