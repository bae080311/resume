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
