# Resume

Vue 3, TypeScript, Vite로 만든 개인 이력서 사이트와 채용공고 맞춤형 Resume Agent다.

## 시작하기

```bash
npm ci
npm run dev
```

프로덕션 빌드는 `npm run build`, 전체 검증은 `npm run check`로 실행한다.

## Resume Agent

Resume Agent는 채용공고를 분석해 프로젝트와 스킬의 순서를 조정하고, 관련 프로젝트 섹션을 선별한 로컬 variant를 만든다. `ANTHROPIC_API_KEY`가 필요하다.

```bash
export ANTHROPIC_API_KEY=your-key
npm run agent -- new --url https://example.com/job
```

주요 명령:

```bash
npm run agent -- new                 # 채용공고 직접 입력
npm run agent -- list                # 저장된 variant 목록
npm run agent -- show <name>         # variant 상세 확인
npm run agent -- apply <name>        # variant 적용
npm run agent -- restore             # 원본 이력서 복원
npm run agent -- delete <name>       # variant 삭제
```

생성된 `agent/variants/*.json`은 채용공고별 로컬 결과이므로 Git에서 제외된다. 원본 이력서 데이터는 `src/data/resumeData.ts`에 있다.

## 검증 하네스

에이전트 결과는 저장·적용 전에 자동 검증된다. 저장된 모든 variant를 별도로 검사하려면 다음을 실행한다.

```bash
npm run agent:check
```

특정 JSON 파일만 검사할 수도 있다.

```bash
npm run agent:check -- path/to/variant.json
```

하네스는 다음 원칙을 확인한다.

- 원본에 없는 프로젝트, 섹션, 스킬이 추가되지 않았는지
- 프로젝트와 스킬이 누락되지 않았는지
- 프로젝트마다 섹션이 2개 이상인지
- 프로젝트 식별 정보, 수상, 활동이 변경되지 않았는지
- variant 메타데이터와 변경 사유가 올바른 형식인지

문장 표현이 사실을 유지하는지는 완전히 자동 판별할 수 없으므로 최종 결과는 사람이 함께 검토해야 한다.

## 협업 규칙

- 에이전트 작업 규칙: `AGENTS.md`
- Git 브랜치·커밋·PR 규칙: `CONTRIBUTING.md`
- PR 체크리스트: `.github/pull_request_template.md`
- 자동 품질 검사: `.github/workflows/ci.yml`
- 선택적 커밋 템플릿: `.gitmessage`

```bash
npm run git:setup
npm run branch -- feat contact-section
```

`git:setup`은 이 저장소에만 hook과 커밋 템플릿을 설정한다. 이후 `main`/`master` 직접 커밋은 차단된다.

## 포트폴리오 채널

상단에서 프론트엔드, 백엔드, Product Engineer 포트폴리오를 전환할 수 있다. 각 채널은 독립된 경로로 직접 접근할 수 있다.

```text
/frontend
/backend
/product-engineer
```
