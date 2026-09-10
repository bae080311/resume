#!/usr/bin/env tsx

import { existsSync, readFileSync, readdirSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import type { ResumeData } from "../src/data/types";
import { activities, awards, projects, skillGroups } from "../src/data/resumeData";
import { validateResumeData, validateVariant } from "./validate-resume";

const currentDir = dirname(fileURLToPath(import.meta.url));
const variantsDir = join(currentDir, "variants");
const baseData: ResumeData = { projects, skillGroups, awards, activities };

function variantFilesFromArgs(args: string[]): string[] {
  if (args.length > 0) return args.map((path) => resolve(path));
  if (!existsSync(variantsDir)) return [];

  return readdirSync(variantsDir)
    .filter((name) => name.endsWith(".json"))
    .sort()
    .map((name) => join(variantsDir, name));
}

function main(): void {
  const baseIssues = validateResumeData(baseData, baseData);
  if (baseIssues.length > 0) {
    console.error("✗ 원본 이력서 데이터가 규칙을 위반합니다.");
    baseIssues.forEach((issue) => console.error(`  - ${issue.path}: ${issue.message}`));
    process.exitCode = 1;
    return;
  }

  const files = variantFilesFromArgs(process.argv.slice(2));
  if (files.length === 0) {
    console.log("✓ 원본 이력서 검증 통과 (저장된 variant 없음)");
    return;
  }

  let failed = 0;
  files.forEach((path) => {
    try {
      const candidate: unknown = JSON.parse(readFileSync(path, "utf-8"));
      const issues = validateVariant(candidate, baseData);
      if (issues.length === 0) {
        console.log(`✓ ${path}`);
        return;
      }

      failed += 1;
      console.error(`✗ ${path}`);
      issues.forEach((issue) => console.error(`  - ${issue.path}: ${issue.message}`));
    } catch (error) {
      failed += 1;
      console.error(`✗ ${path}`);
      console.error(`  - ${(error as Error).message}`);
    }
  });

  if (failed > 0) {
    console.error(`\n${failed}/${files.length}개 variant 검증 실패`);
    process.exitCode = 1;
    return;
  }

  console.log(`\n✓ ${files.length}개 variant 검증 통과`);
}

main();
