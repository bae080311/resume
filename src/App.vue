<script setup lang="ts">
import HeroSection from "./components/HeroSection.vue";
import AboutSection from "./components/AboutSection.vue";
import SkillsSection from "./components/SkillsSection.vue";
import ProjectsSection from "./components/ProjectsSection.vue";
import SideProjectSection from "./components/SideProjectSection.vue";
import OssSection from "./components/OssSection.vue";
import AwardsSection from "./components/AwardsSection.vue";
import ActivitiesSection from "./components/ActivitiesSection.vue";
import EducationSection from "./components/EducationSection.vue";
import AppFooter from "./components/AppFooter.vue";
</script>

<template>
  <main class="wrap">
    <HeroSection />
    <div class="divider" />
    <AboutSection />
    <div class="divider" />
    <ProjectsSection />
    <div class="divider" />
    <SideProjectSection />
    <div class="divider" />
    <OssSection />
    <div class="divider" />
    <SkillsSection />
    <div class="divider" />
    <AwardsSection />
    <div class="divider" />
    <ActivitiesSection />
    <div class="divider" />
    <EducationSection />
  </main>
  <AppFooter />
  <a href="/portfolio.pdf" download="배경진_포트폴리오.pdf" class="floating-download">
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
    포트폴리오 다운로드
  </a>
</template>

<style>
.wrap {
  max-width: var(--max-w);
  margin: 0 auto;
  padding: 0 24px;
}

.divider {
  width: 100%;
  height: 1px;
  background: var(--gray-100);
}

section {
  padding: 72px 0;
}

.section-title {
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--gray-400);
  margin-bottom: 28px;
}

@media (max-width: 600px) {
  section {
    padding: 48px 0;
  }
}

.floating-download {
  position: fixed;
  bottom: 28px;
  right: 28px;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 13px;
  font-weight: 600;
  color: var(--white);
  background: var(--accent);
  border: 1px solid var(--accent);
  padding: 8px 16px;
  border-radius: 999px;
  box-shadow: 0 4px 16px rgba(59, 130, 246, 0.35);
  text-decoration: none;
  transition: opacity 0.15s, box-shadow 0.15s;
  z-index: 999;
}

.floating-download:hover {
  opacity: 0.85;
  box-shadow: 0 6px 20px rgba(59, 130, 246, 0.45);
}

@media print {
  .floating-download {
    display: none;
  }
}
</style>
