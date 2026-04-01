<template>
  <section class="hero">
    <div class="hero-top">
      <h1>안녕하세요,<br />프론트엔드 개발자<br /><strong>배경진</strong>입니다.</h1>
      <p class="sub">매일 조금씩 성장하고, 팀과 함께 더 좋은 결과를 만드는 개발자입니다.</p>
    </div>

    <div class="hero-meta">
      <div class="meta-row">
        <a href="mailto:dev.kyungjin@gmail.com">dev.kyungjin@gmail.com</a>
        <span class="dot">·</span>
        <a href="tel:01045952921">010-4595-2921</a>
      </div>
      <div class="links">
        <a href="https://github.com/kyungjin99" target="_blank" rel="noopener" class="link-external">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/></svg>
          GitHub
        </a>
        <a href="https://devkyungjin.tistory.com" target="_blank" rel="noopener" class="link-external">
          <span class="tistory-t">T</span>
          Tistory
        </a>
        <a href="/portfolio.pdf" download="배경진_포트폴리오.pdf" class="link-file">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
          Portfolio
        </a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  padding: 64px 0 72px;
  display: flex;
  flex-direction: column;
  gap: 40px;
}

h1 {
  font-size: 40px;
  font-weight: 700;
  line-height: 1.25;
  letter-spacing: -0.5px;
  color: var(--black);
}

h1 strong {
  color: var(--accent);
}

.sub {
  margin-top: 16px;
  font-size: 15px;
  color: var(--gray-600);
  line-height: 1.7;
  max-width: 480px;
}

.hero-meta {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.meta-row {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 13px;
  color: var(--gray-600);
  flex-wrap: wrap;
}

.meta-row a {
  color: var(--gray-600);
  transition: color 0.15s;
}

.meta-row a:hover {
  color: var(--black);
}

.dot {
  color: var(--gray-200);
}

.links {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
}

.links a {
  display: inline-flex;
  align-items: center;
  gap: 5px;
  font-size: 13px;
  font-weight: 500;
  padding: 5px 12px;
  border-radius: 6px;
  transition: background 0.15s, color 0.15s, border-color 0.15s;
}

.link-external {
  color: var(--gray-800);
  border: 1px solid var(--gray-200);
  background: var(--white);
}

.link-external:hover {
  border-color: var(--gray-400);
  color: var(--black);
}

.link-file {
  color: var(--white);
  background: var(--accent);
  border: 1px solid var(--accent);
}

.link-file:hover {
  opacity: 0.85;
}

.tistory-t {
  font-size: 13px;
  font-weight: 800;
  line-height: 1;
}

@media (max-width: 600px) {
  .hero { padding: 80px 0 48px; }
  h1 { font-size: 28px; }
}
</style>
