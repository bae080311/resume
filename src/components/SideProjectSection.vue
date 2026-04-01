<template>
  <section id="side-projects">
    <p class="section-title">Side Projects</p>
    <div class="project-list">
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
          core 로직을 중심으로 React·Vue 어댑터를 모노레포 구조로 분리 설계해 확장성과 재사용성을 확보했습니다.<br />
          npm에 여러 패키지로 공개된 오픈소스로, 총 <strong>2,000+회</strong> 이상 다운로드되었습니다.
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
