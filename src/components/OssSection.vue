<template>
  <section id="oss">
    <p class="section-title">Open Source</p>
    <div class="oss-list">
      <div class="oss-item">
        <div class="title-row">
          <a href="https://github.com/TanStack/query" target="_blank" rel="noopener" class="repo-link">tanstack/query</a>
          <span class="label">Documentation</span>
        </div>
        <p class="desc">
          다크/라이트 모드에 따라 일부 파트너 로고가 아예 보이지 않는 문제를 해결하기 위해
          로고 자동 전환과 마크업 정리를 적용해 README 품질을 개선
        </p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.oss-list {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.oss-item {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.title-row {
  display: flex;
  align-items: center;
  gap: 10px;
}

.repo-link {
  font-size: 15px;
  font-weight: 600;
  color: var(--black);
  transition: color 0.15s;
}

.repo-link:hover {
  color: var(--accent);
}

.label {
  font-size: 11px;
  font-weight: 600;
  color: var(--accent);
  background: rgba(59, 130, 246, 0.08);
  border: 1px solid rgba(59, 130, 246, 0.2);
  border-radius: 3px;
  padding: 1px 7px;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.desc {
  font-size: 14px;
  color: var(--gray-600);
  line-height: 1.7;
}
</style>
