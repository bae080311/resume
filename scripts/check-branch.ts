#!/usr/bin/env tsx

import { execFileSync } from "node:child_process";
import { isProtectedBranch } from "./git-rules";

const branch = execFileSync("git", ["branch", "--show-current"], {
  encoding: "utf-8",
}).trim();

if (!branch) {
  console.error("✗ detached HEAD 상태에서는 커밋할 수 없습니다.");
  process.exitCode = 1;
} else if (isProtectedBranch(branch)) {
  console.error(`✗ 보호 브랜치 '${branch}'에는 직접 커밋할 수 없습니다.`);
  console.error("  npm run branch -- <type> <topic> 으로 작업 브랜치를 먼저 만드세요.");
  process.exitCode = 1;
} else {
  console.log(`✓ 작업 브랜치 확인: ${branch}`);
}
