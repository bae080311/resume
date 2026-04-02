<template>
  <section id="skills">
    <p class="section-title">Skills</p>
    <div class="skills-grid">
      <div v-for="group in skillGroups" :key="group.category" class="skill-group">
        <p class="category">{{ group.category }}</p>
        <div class="tags">
          <span v-for="skill in group.skills" :key="skill" class="tag">{{ skill }}</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const skillGroups = [
  {
    category: 'Language',
    skills: ['TypeScript', 'JavaScript'],
  },
  {
    category: 'Framework / Library',
    skills: ['React', 'React Native', 'Next.js', 'Nest.js', 'Expo', 'TanStack Query', 'Zustand', 'Redux'],
  },
  {
    category: 'Styling',
    skills: ['Tailwind CSS', 'NativeWind'],
  },
  {
    category: 'Tooling',
    skills: ['Zod', 'Axios', 'Socket.IO', 'Vitest', 'ESLint', 'Prettier', 'Git'],
  },
  {
    category: 'Infrastructure',
    skills: ['GitHub Actions', 'EAS', 'Vercel', 'Sentry', 'Docker'],
  },
]
</script>

<style scoped>
.skills-grid {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.skill-group {
  display: flex;
  gap: 24px;
  align-items: flex-start;
}

.category {
  font-size: 12px;
  font-weight: 600;
  color: var(--gray-400);
  min-width: 140px;
  padding-top: 3px;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.tag {
  font-size: 13px;
  font-weight: 600;
  color: var(--gray-800);
  background: var(--white);
  border: 1px solid var(--gray-100);
  border-radius: 4px;
  padding: 3px 10px;
}

@media (max-width: 600px) {
  .skill-group {
    flex-direction: column;
    gap: 8px;
  }
  .category {
    min-width: unset;
  }
}
</style>
