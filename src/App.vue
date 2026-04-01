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
</style>
