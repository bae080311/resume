<template>
  <footer>
    <div class="footer-cta">
      <div class="cta-inner">
        <div class="cta-text">
          <p class="cta-label">포트폴리오</p>
          <h2 class="cta-title">함께 일할 개발자를 찾고 계시다면,<br />포트폴리오를 확인해 주세요.</h2>
        </div>
        <div class="cta-actions">
          <a href="/portfolio.pdf" download="배경진_포트폴리오.pdf" class="btn-download">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
              <polyline points="7 10 12 15 17 10"/>
              <line x1="12" y1="15" x2="12" y2="3"/>
            </svg>
            포트폴리오 다운로드
          </a>
          <a href="mailto:dev.kyungjin@gmail.com" class="btn-contact">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
              <rect x="2" y="4" width="20" height="16" rx="2"/>
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
            </svg>
            연락하기
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer-cta {
  border-top: 1px solid var(--gray-100);
  background: var(--white);
}

.cta-inner {
  max-width: var(--max-w);
  margin: 0 auto;
  padding: 64px 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 32px;
}

.cta-label {
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--accent);
  margin-bottom: 10px;
}

.cta-title {
  font-size: 22px;
  font-weight: 700;
  line-height: 1.45;
  letter-spacing: -0.3px;
  color: var(--black);
}

.cta-actions {
  display: flex;
  gap: 8px;
  flex-shrink: 0;
}

.btn-download,
.btn-contact {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 13px;
  font-weight: 600;
  padding: 10px 18px;
  border-radius: 8px;
  transition: opacity 0.15s, background 0.15s, border-color 0.15s, color 0.15s;
  white-space: nowrap;
}

.btn-download {
  background: var(--accent);
  color: var(--white);
  border: 1px solid var(--accent);
}

.btn-download:hover {
  opacity: 0.85;
}

.btn-contact {
  background: var(--white);
  color: var(--gray-800);
  border: 1px solid var(--gray-200);
}

.btn-contact:hover {
  border-color: var(--gray-400);
  color: var(--black);
}

.footer-bottom {
  border-top: 1px solid var(--gray-100);
}

.footer-inner {
  max-width: var(--max-w);
  margin: 0 auto;
  padding: 20px 24px;
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 12px;
  color: var(--gray-400);
}

.sep {
  color: var(--gray-200);
}

a {
  color: var(--gray-400);
  transition: color 0.15s;
}

.footer-inner a:hover {
  color: var(--black);
}

@media (max-width: 600px) {
  .cta-inner {
    flex-direction: column;
    align-items: flex-start;
    padding: 48px 24px;
    gap: 24px;
  }

  .cta-title {
    font-size: 18px;
  }

  .cta-actions {
    width: 100%;
    flex-direction: column;
  }

  .btn-download,
  .btn-contact {
    width: 100%;
    justify-content: center;
    padding: 12px 18px;
  }
}
</style>
