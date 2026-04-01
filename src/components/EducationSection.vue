<template>
  <section id="education">
    <p class="section-title">Education</p>
    <div class="edu-list">
      <div class="edu-item">
        <div class="edu-header">
          <h3>광주소프트웨어마이스터고등학교</h3>
        </div>
        <p class="major">SW개발과</p>
      </div>
    </div>
    <div class="cert-list">
      <p class="section-sub">Certifications</p>
      <div class="cert-item">
        <span class="cert-name">정보처리산업기사</span>
        <span class="cert-date">2025.12</span>
      </div>
    </div>
  </section>
</template>

<style scoped>
.edu-list {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.edu-item {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.edu-header {
  display: flex;
  align-items: baseline;
  gap: 12px;
  flex-wrap: wrap;
}

h3 {
  font-size: 16px;
  font-weight: 700;
  color: var(--black);
}

.major {
  font-size: 14px;
  color: var(--gray-600);
}

.cert-list {
  margin-top: 28px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.section-sub {
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--gray-400);
  margin-bottom: 4px;
}

.cert-item {
  display: flex;
  align-items: baseline;
  gap: 12px;
}

.cert-name {
  font-size: 15px;
  font-weight: 600;
  color: var(--black);
}

.cert-date {
  font-size: 12px;
  color: var(--gray-400);
}
</style>
