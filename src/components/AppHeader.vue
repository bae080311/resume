<template>
  <header>
    <div class="header-inner">
      <span class="logo">배경진</span>
      <nav>
        <a href="#about">소개</a>
        <a href="#skills">기술</a>
        <a href="#projects">프로젝트</a>
        <a href="#awards">수상</a>
        <a href="#education">학력</a>
      </nav>
    </div>
  </header>
</template>

<style scoped>
header {
  position: fixed;
  top: 0; left: 0; right: 0;
  z-index: 999;
  background: rgba(248, 248, 248, 0.88);
  backdrop-filter: blur(16px);
  border-bottom: 1px solid var(--gray-100);
}

.header-inner {
  max-width: var(--max-w);
  margin: 0 auto;
  padding: 0 24px;
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.logo {
  font-size: 15px;
  font-weight: 700;
  letter-spacing: -0.3px;
}

nav { display: flex; gap: 24px; }

nav a {
  font-size: 13px;
  font-weight: 500;
  color: var(--gray-600);
  transition: color 0.15s;
}

nav a:hover { color: var(--black); }

@media (max-width: 600px) {
  nav { display: none; }
}
</style>
