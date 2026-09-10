# 기여 가이드

## 브랜치

기본 브랜치에 직접 변경하거나 커밋하지 않는다. 저장소를 처음 받은 뒤 로컬 Git 규칙을 한 번 설치한다.

```bash
npm run git:setup
```

기여를 시작할 때 기본 브랜치를 최신 상태로 만든 뒤 작업 브랜치를 생성한다.

```bash
git switch main
git pull --ff-only
npm run branch -- feat contact-section
```

브랜치 생성 도우미는 기본 브랜치와 깨끗한 작업 트리에서만 실행된다. 이미 다른 작업 브랜치에 있거나 미커밋 변경이 있으면 새 브랜치를 만들지 않는다.

| 종류 | 형식 | 예시 |
| --- | --- | --- |
| 기능 | `feat/<topic>` | `feat/agent-validation` |
| 버그 수정 | `fix/<topic>` | `fix/mobile-layout` |
| 문서 | `docs/<topic>` | `docs/agent-usage` |
| 리팩터링 | `refactor/<topic>` | `refactor/resume-data` |
| 테스트 | `test/<topic>` | `test/variant-validator` |
| 유지보수 | `chore/<topic>` | `chore/update-vite` |

브랜치 이름은 소문자 kebab-case를 사용한다. Git hook은 `main`/`master` 직접 커밋을 차단하고 커밋 전에 품질 검사를 실행한다.

## 커밋

Conventional Commits 형식을 사용한다.

```text
<type>(optional-scope): <summary>
```

허용 타입은 `feat`, `fix`, `docs`, `refactor`, `test`, `chore`, `build`, `ci`, `perf`, `revert`다.

```text
feat(agent): validate tailored resume before saving
docs: explain local development workflow
```

- 제목은 명령형으로 간결하게 작성하고 마침표를 붙이지 않는다.
- 서로 다른 목적의 변경은 별도 커밋으로 나눈다.
- 생성물, 비밀정보, 디버그 로그를 커밋하지 않는다.
- 사실 정보 변경은 커밋 본문이나 PR에 근거를 남긴다.

필요하면 저장소의 `.gitmessage`를 커밋 템플릿으로 설정할 수 있다.

```bash
git config commit.template .gitmessage
```

## 로컬 검증

PR을 열기 전에 다음 명령을 실행한다.

```bash
npm ci
npm run check
git diff --check
```

`npm run check`는 TypeScript/Vue 빌드, 단위 테스트, 저장된 에이전트 variant 검증을 수행한다.

## Pull Request

- PR 하나에는 하나의 목적만 담는다.
- 변경 이유와 확인 방법을 작성한다.
- UI 변경은 전후 화면 또는 스크린샷을 첨부한다.
- 이력서 데이터 변경은 출처와 사실 확인 여부를 작성한다.
- CI 실패, 미해결 리뷰, 검증되지 않은 생성 결과가 있으면 병합하지 않는다.
- 병합은 기본적으로 squash merge를 사용한다.
- GitHub Actions가 브랜치 이름, PR 제목, 테스트, 에이전트 하네스, 빌드를 자동 검사한다.
