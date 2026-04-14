#!/usr/bin/env tsx
/**
 * Resume Agent — 채용공고 URL 기반 이력서 자동 맞춤 도구
 *
 * Usage:
 *   npm run agent -- new --url <url>    채용공고 URL로 새 맞춤 버전 생성
 *   npm run agent -- new                직접 입력으로 새 버전 생성
 *   npm run agent -- list               저장된 버전 목록
 *   npm run agent -- apply <name>       버전 적용 (이력서에 반영)
 *   npm run agent -- restore            기본 이력서로 복원
 *   npm run agent -- show <name>        버전 상세 보기
 *   npm run agent -- delete <name>      버전 삭제
 */

import Anthropic from "@anthropic-ai/sdk";
import {
  readFileSync,
  writeFileSync,
  existsSync,
  readdirSync,
  unlinkSync,
} from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";
import * as readline from "readline";
import type { ResumeData, ResumeVariant } from "../src/data/types";
import {
  projects,
  skillGroups,
  awards,
  activities,
} from "../src/data/resumeData";

const __dirname = dirname(fileURLToPath(import.meta.url));
const VARIANTS_DIR = join(__dirname, "variants");
const ACTIVE_RESUME_PATH = join(__dirname, "../src/data/activeResume.ts");

const client = new Anthropic();

// ─── HTML → 텍스트 변환 ──────────────────────────────────────────────────────

function htmlToText(html: string): string {
  return html
    .replace(/<script[\s\S]*?<\/script>/gi, "")
    .replace(/<style[\s\S]*?<\/style>/gi, "")
    .replace(/<[^>]+>/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&nbsp;/g, " ")
    .replace(/&quot;/g, '"')
    .replace(/\s{2,}/g, " ")
    .trim();
}

// ─── URL 채용공고 가져오기 ────────────────────────────────────────────────────

async function fetchJobPosting(url: string): Promise<string> {
  console.log(`\n채용공고 불러오는 중: ${url}`);
  const res = await fetch(url, {
    headers: {
      "User-Agent":
        "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
      Accept: "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
      "Accept-Language": "ko-KR,ko;q=0.9,en;q=0.8",
    },
  });

  if (!res.ok) {
    throw new Error(`URL 요청 실패: ${res.status} ${res.statusText}`);
  }

  const html = await res.text();
  const text = htmlToText(html);

  // 너무 길면 앞 8000자만 사용 (토큰 절약)
  return text.length > 8000 ? text.slice(0, 8000) + "\n...(이하 생략)" : text;
}

// ─── Claude로 이력서 맞춤화 ──────────────────────────────────────────────────

async function tailorResume(
  jobText: string,
  companyName: string,
  role: string
): Promise<{ data: ResumeData; changes: string[] }> {
  const baseData: ResumeData = { projects, skillGroups, awards, activities };

  const systemPrompt = `당신은 이력서 맞춤화 전문가입니다. 지원자의 이력서 데이터와 채용공고를 분석해 채용공고에 최적화된 이력서 데이터를 JSON으로 반환합니다.

규칙:
1. 절대로 없는 경험을 만들거나 사실을 왜곡하지 마세요
2. 프로젝트 순서를 채용공고와 관련성 높은 순으로 재배열하세요
3. 각 프로젝트 내 sections를 관련성 높은 것만 남기되, 프로젝트당 최소 2개는 유지하세요
4. 스킬 그룹 내 기술 순서를 채용공고 요구사항 기준으로 재배열하세요
5. 기존 bullet point를 채용공고 키워드에 맞게 약간 다듬을 수 있으나 사실은 유지하세요
6. changes 배열에 변경 이유를 한국어로 명확히 기록하세요

반드시 아래 JSON 형식만 반환하세요 (마크다운 코드블록 없이 순수 JSON):
{
  "data": {
    "projects": [...],
    "skillGroups": [...],
    "awards": [...],
    "activities": [...]
  },
  "changes": ["변경사항1", "변경사항2", ...]
}`;

  const userPrompt = `회사: ${companyName}
포지션: ${role}

=== 채용공고 내용 ===
${jobText}

=== 현재 이력서 데이터 ===
${JSON.stringify(baseData, null, 2)}`;

  console.log("Claude가 채용공고를 분석하고 이력서를 맞춤화하는 중...");

  const message = await client.messages.create({
    model: "claude-opus-4-5",
    max_tokens: 8096,
    system: [
      {
        type: "text",
        text: systemPrompt,
        cache_control: { type: "ephemeral" }, // 이력서 데이터 캐싱
      },
    ],
    messages: [{ role: "user", content: userPrompt }],
  });

  const content = message.content[0];
  if (content.type !== "text") throw new Error("예상치 못한 응답 형식");

  // JSON 파싱 (마크다운 코드블록 감싸인 경우 처리)
  const raw = content.text.replace(/^```json\n?|```$/gm, "").trim();
  const parsed = JSON.parse(raw);

  return { data: parsed.data, changes: parsed.changes };
}

// ─── 버전 저장/로드 ───────────────────────────────────────────────────────────

function slugify(name: string): string {
  return name
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9가-힣-]/g, "");
}

function saveVariant(variant: ResumeVariant): string {
  const slug = slugify(variant.meta.company);
  const path = join(VARIANTS_DIR, `${slug}.json`);
  writeFileSync(path, JSON.stringify(variant, null, 2), "utf-8");
  return slug;
}

function loadVariant(nameOrSlug: string): ResumeVariant {
  const slug = slugify(nameOrSlug);
  const path = join(VARIANTS_DIR, `${slug}.json`);
  if (!existsSync(path)) {
    throw new Error(`버전을 찾을 수 없습니다: ${nameOrSlug}`);
  }
  return JSON.parse(readFileSync(path, "utf-8"));
}

function listVariants(): ResumeVariant[] {
  if (!existsSync(VARIANTS_DIR)) return [];
  return readdirSync(VARIANTS_DIR)
    .filter((f) => f.endsWith(".json"))
    .map((f) => JSON.parse(readFileSync(join(VARIANTS_DIR, f), "utf-8")));
}

// ─── activeResume.ts 파일 조작 ────────────────────────────────────────────────

function applyVariant(variant: ResumeVariant): void {
  const { data, meta } = variant;

  const content = `// Managed by resume-agent. Current: ${meta.company} — ${meta.role}
// Applied: ${meta.createdAt}
// Run \`npm run agent -- restore\` to reset to base.
import type { Project, SkillGroup, Award, Activity } from './types'

export const projects: Project[] = ${JSON.stringify(data.projects, null, 2)} as Project[]

export const skillGroups: SkillGroup[] = ${JSON.stringify(data.skillGroups, null, 2)} as SkillGroup[]

export const awards: Award[] = ${JSON.stringify(data.awards, null, 2)} as Award[]

export const activities: Activity[] = ${JSON.stringify(data.activities, null, 2)} as Activity[]
`;

  writeFileSync(ACTIVE_RESUME_PATH, content, "utf-8");
}

function restoreBase(): void {
  const content = `// Managed by resume-agent. Current: BASE
// Run \`npm run agent\` to customize for a specific company.
export { projects, skillGroups, awards, activities } from './resumeData'
`;
  writeFileSync(ACTIVE_RESUME_PATH, content, "utf-8");
}

function getActiveInfo(): string {
  const content = readFileSync(ACTIVE_RESUME_PATH, "utf-8");
  const match = content.match(/Current: (.+)/);
  return match ? match[1] : "알 수 없음";
}

// ─── readline 헬퍼 ───────────────────────────────────────────────────────────

function createRl() {
  return readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
}

function ask(rl: readline.Interface, question: string): Promise<string> {
  return new Promise((resolve) => rl.question(question, resolve));
}

// ─── 커맨드 핸들러 ────────────────────────────────────────────────────────────

async function cmdNew(args: string[]): Promise<void> {
  const urlIdx = args.indexOf("--url");
  const urlArg = urlIdx !== -1 ? args[urlIdx + 1] : null;

  const rl = createRl();

  const company = await ask(rl, "회사명: ");
  const role = await ask(rl, "지원 포지션: ");

  let jobText: string;
  if (urlArg) {
    rl.close();
    jobText = await fetchJobPosting(urlArg);
  } else {
    console.log('\n채용공고 내용을 붙여넣으세요 (빈 줄 두 번 입력 시 완료):');
    const lines: string[] = [];
    let emptyCount = 0;

    jobText = await new Promise((resolve) => {
      rl.on("line", (line) => {
        if (line === "") {
          emptyCount++;
          if (emptyCount >= 2) {
            rl.close();
            resolve(lines.join("\n"));
          }
        } else {
          emptyCount = 0;
          lines.push(line);
        }
      });
    });
  }

  if (!jobText.trim()) {
    console.error("채용공고 내용이 없습니다.");
    process.exit(1);
  }

  const { data, changes } = await tailorResume(jobText, company, role);

  const variant: ResumeVariant = {
    meta: {
      company,
      role,
      createdAt: new Date().toISOString().split("T")[0],
      changes,
    },
    data,
  };

  const slug = saveVariant(variant);
  console.log(`\n✓ 버전 저장됨: agent/variants/${slug}.json`);
  console.log("\n변경 사항:");
  changes.forEach((c) => console.log(`  • ${c}`));

  if (!urlArg) {
    const rl2 = createRl();
    const answer = await ask(rl2, "\n지금 바로 적용할까요? (y/n): ");
    rl2.close();
    if (answer.toLowerCase() === "y") {
      applyVariant(variant);
      console.log(`✓ 적용 완료! \`npm run dev\`로 확인하세요.`);
    }
  } else {
    applyVariant(variant);
    console.log(`\n✓ 자동 적용 완료! \`npm run dev\`로 확인하세요.`);
  }
}

function cmdList(): void {
  const variants = listVariants();
  const active = getActiveInfo();

  console.log(`\n현재 적용 중: ${active}\n`);

  if (variants.length === 0) {
    console.log("저장된 버전이 없습니다. \`npm run agent -- new\`로 생성하세요.");
    return;
  }

  console.log("저장된 버전 목록:");
  variants.forEach((v) => {
    const slug = slugify(v.meta.company);
    const isActive = active.startsWith(v.meta.company);
    console.log(
      `  ${isActive ? "▶" : " "} [${slug}] ${v.meta.company} — ${v.meta.role} (${v.meta.createdAt})`
    );
  });
  console.log(
    '\n사용법: npm run agent -- apply <name> | npm run agent -- show <name>'
  );
}

function cmdApply(name: string): void {
  const variant = loadVariant(name);
  applyVariant(variant);
  console.log(
    `\n✓ "${variant.meta.company} — ${variant.meta.role}" 버전 적용 완료`
  );
  console.log("  npm run dev 로 미리보기, npm run build 로 빌드하세요.");
}

function cmdRestore(): void {
  restoreBase();
  console.log("\n✓ 기본 이력서로 복원 완료");
}

function cmdShow(name: string): void {
  const variant = loadVariant(name);
  const { meta, data } = variant;

  console.log(`\n[ ${meta.company} — ${meta.role} ]`);
  console.log(`생성일: ${meta.createdAt}`);
  console.log(`\n변경 사항:`);
  meta.changes.forEach((c) => console.log(`  • ${c}`));
  console.log(`\n프로젝트 순서:`);
  data.projects.forEach((p, i) => console.log(`  ${i + 1}. ${p.title}`));
  console.log(`\n스킬 (첫 번째 카테고리):`);
  if (data.skillGroups[0]) {
    console.log(
      `  ${data.skillGroups[0].category}: ${data.skillGroups[0].skills.join(", ")}`
    );
  }
}

function cmdDelete(name: string): void {
  const slug = slugify(name);
  const path = join(VARIANTS_DIR, `${slug}.json`);
  if (!existsSync(path)) {
    console.error(`버전을 찾을 수 없습니다: ${name}`);
    process.exit(1);
  }
  unlinkSync(path);
  console.log(`\n✓ "${name}" 버전 삭제 완료`);
}

function printHelp(): void {
  console.log(`
Resume Agent — 채용공고 맞춤 이력서 버전 관리

사용법:
  npm run agent -- new --url <url>    채용공고 URL로 버전 생성 후 즉시 적용
  npm run agent -- new                직접 입력으로 버전 생성
  npm run agent -- list               저장된 버전 목록 보기
  npm run agent -- apply <name>       저장된 버전 적용
  npm run agent -- restore            기본 이력서로 복원
  npm run agent -- show <name>        버전 상세 내용 보기
  npm run agent -- delete <name>      버전 삭제

예시:
  npm run agent -- new --url https://www.wanted.co.kr/wd/12345
  npm run agent -- apply kakao
  npm run agent -- restore
`);
}

// ─── 진입점 ──────────────────────────────────────────────────────────────────

async function main() {
  const args = process.argv.slice(2);
  const cmd = args[0];

  if (!cmd || cmd === "help" || cmd === "--help") {
    printHelp();
    return;
  }

  if (!process.env.ANTHROPIC_API_KEY && (cmd === "new")) {
    console.error(
      "ANTHROPIC_API_KEY 환경변수가 필요합니다.\n" +
        "export ANTHROPIC_API_KEY=sk-ant-... 후 다시 실행하세요."
    );
    process.exit(1);
  }

  try {
    switch (cmd) {
      case "new":
        await cmdNew(args.slice(1));
        break;
      case "list":
        cmdList();
        break;
      case "apply":
        if (!args[1]) { console.error("사용법: npm run agent -- apply <name>"); process.exit(1); }
        cmdApply(args[1]);
        break;
      case "restore":
        cmdRestore();
        break;
      case "show":
        if (!args[1]) { console.error("사용법: npm run agent -- show <name>"); process.exit(1); }
        cmdShow(args[1]);
        break;
      case "delete":
        if (!args[1]) { console.error("사용법: npm run agent -- delete <name>"); process.exit(1); }
        cmdDelete(args[1]);
        break;
      default:
        console.error(`알 수 없는 명령어: ${cmd}`);
        printHelp();
        process.exit(1);
    }
  } catch (err) {
    console.error("\n오류:", (err as Error).message);
    process.exit(1);
  }
}

main();
