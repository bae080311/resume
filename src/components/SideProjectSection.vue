<template>
  <section id="side-projects">
    <p class="section-title">Side Projects</p>
    <div class="project-list">
      <div class="project-item">
        <div class="title-row">
          <h3>resume-agent</h3>
          <a href="https://github.com/kyungjin99/resume" target="_blank" rel="noopener" class="link">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
            GitHub
          </a>
        </div>
        <p class="desc">
          채용공고 URL을 입력하면 <strong>Claude API</strong>가 JD를 분석해 이력서를 자동으로 맞춤화하는 CLI 에이전트입니다.<br />
          프로젝트 순서 재배열, 관련 섹션 필터링, 스킬 우선순위 조정을 수행하며 회사별 버전을 JSON으로 저장·관리합니다.<br />
          적용 시 <strong>Vite HMR</strong>이 즉시 반영되어 실시간으로 미리볼 수 있고, <code>restore</code> 명령으로 원본으로 되돌릴 수 있습니다.
        </p>
        <div class="tech-tags">
          <span class="tech">TypeScript</span>
          <span class="tech">Claude API</span>
          <span class="tech">Node.js</span>
          <span class="tech">Vue 3</span>
          <span class="tech">Vite</span>
        </div>
      </div>

      <div class="project-item">
        <div class="title-row">
          <h3>jump-section</h3>
          <a href="https://www.npmjs.com/org/jump-section" target="_blank" rel="noopener" class="link">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
          npm
        </a>
        </div>
        <p class="desc">
          섹션 기반 스크롤 이동과 활성 상태 관리를 제공하는 JavaScript 라이브러리입니다.<br />
          core 로직을 중심으로 React·Vue·Svelte 어댑터를 모노레포 구조로 분리 설계해 확장성과 재사용성을 확보했습니다.<br />
          npm에 여러 패키지로 공개된 오픈소스로, 총 <strong>2,000+회</strong> 이상 다운로드되었으며 테스트 커버리지 <strong>90%+</strong>를 달성했습니다.<br />
          n8n과 Gemini API를 연동한 <strong>AI 파이프라인</strong>을 구축해 매주 기획 기반 이슈 자동 생성, Gemini Code Assist 리뷰를 반영한 자동 수정 커밋 워크플로우를 설계했습니다.
        </p>
        <div class="tech-tags">
          <span class="tech">JavaScript</span>
          <span class="tech">TypeScript</span>
          <span class="tech">React</span>
          <span class="tech">Vue</span>
          <span class="tech">Monorepo</span>
          <span class="tech">npm</span>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.project-list {
  display: flex;
  flex-direction: column;
  gap: 28px;
}

.project-item {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.title-row {
  display: flex;
  align-items: center;
  gap: 12px;
  flex-wrap: wrap;
}

h3 {
  font-size: 16px;
  font-weight: 700;
  color: var(--black);
}

.link {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  font-size: 12px;
  font-weight: 500;
  color: var(--gray-800);
  border: 1px solid var(--gray-200);
  border-radius: 6px;
  padding: 3px 10px;
  background: var(--white);
  transition: color 0.15s, border-color 0.15s;
}

.link:hover {
  color: var(--black);
  border-color: var(--gray-400);
}

.desc {
  font-size: 14px;
  color: var(--gray-600);
  line-height: 1.8;
}

.desc strong {
  color: var(--black);
  font-weight: 700;
}

.desc code {
  font-family: 'SFMono-Regular', Consolas, monospace;
  font-size: 12px;
  background: var(--gray-50, rgba(0,0,0,0.04));
  border: 1px solid var(--gray-100);
  border-radius: 3px;
  padding: 1px 5px;
  color: var(--gray-800);
}

.tech-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}

.tech {
  font-size: 12px;
  color: var(--accent);
  background: rgba(59, 130, 246, 0.06);
  border: 1px solid rgba(59, 130, 246, 0.2);
  border-radius: 4px;
  padding: 2px 8px;
}
</style>
