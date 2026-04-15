<template>
  <section id="projects">
    <p class="section-title">Projects</p>
    <div class="project-list">
      <div
        v-for="(project, i) in projects"
        :key="project.title"
        class="project-item"
      >
        <div class="project-header">
          <div class="project-title-row">
            <h3>
              <Tooltip :text="project.team" :index="i + 1">{{
                project.title
              }}</Tooltip>
            </h3>
            <span class="period">{{ project.period }}</span>
            <a v-if="project.github" :href="project.github" target="_blank" rel="noopener" class="github-link">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/></svg>
              GitHub
            </a>
          </div>
          <p class="sub">{{ project.description }}</p>
          <p class="role">{{ project.role }}</p>
        </div>
        <div class="contributions">
          <div
            v-for="section in project.sections"
            :key="section.name"
            class="contrib-section"
          >
            <p class="contrib-title">
          <a v-if="section.link" :href="section.link" target="_blank" rel="noopener" class="contrib-link">{{ section.name }} ↗</a>
          <template v-else>{{ section.name }}</template>
        </p>
            <ul>
              <li v-for="item in section.items" :key="item">{{ item }}</li>
            </ul>
          </div>
        </div>
        <div class="tech-tags">
          <span v-for="tech in project.techs" :key="tech" class="tech">{{
            tech
          }}</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import Tooltip from "./Tooltip.vue";
import { projects } from "../data/activeResume";
</script>

<style scoped>
.project-list {
  display: flex;
  flex-direction: column;
  gap: 0;
}

.project-item {
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 48px 0;
  border-bottom: 1px solid var(--gray-100);
}

.project-item:first-child {
  padding-top: 0;
}

.project-item:last-child {
  border-bottom: none;
  padding-bottom: 0;
}

.project-header {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.project-title-row {
  display: flex;
  align-items: baseline;
  gap: 12px;
  flex-wrap: wrap;
}

h3 {
  font-size: 17px;
  font-weight: 700;
  color: var(--black);
}

.period {
  font-size: 12px;
  color: var(--gray-400);
}

.github-link {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  font-size: 12px;
  font-weight: 500;
  color: var(--gray-600);
  border: 1px solid var(--gray-200);
  border-radius: 5px;
  padding: 2px 8px;
  background: var(--white);
  transition: color 0.15s, border-color 0.15s;
}

.github-link:hover {
  color: var(--black);
  border-color: var(--gray-400);
}

.sub {
  margin-top: 4px;
  font-size: 14px;
  color: var(--gray-600);
  line-height: 1.7;
}

.role {
  font-size: 13px;
  color: var(--gray-400);
}

.contributions {
  display: flex;
  flex-direction: column;
  gap: 14px;
}

.contrib-section {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.contrib-title {
  font-size: 13px;
  font-weight: 700;
  color: var(--black);
}

.contrib-link {
  color: var(--black);
  text-decoration: none;
  border-bottom: 1px solid var(--gray-300);
}

.contrib-link:hover {
  color: var(--accent);
  border-bottom-color: var(--accent);
}

ul {
  padding-left: 18px;
  display: flex;
  flex-direction: column;
  gap: 4px;
}

li {
  font-size: 14px;
  color: var(--gray-600);
  line-height: 1.7;
}

.tech-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}

.tech {
  font-size: 12px;
  font-weight: 700;
  color: var(--accent);
  background: rgba(59, 130, 246, 0.06);
  border: 1px solid rgba(59, 130, 246, 0.2);
  border-radius: 4px;
  padding: 2px 8px;
}
</style>
