<template>
  <section id="activities">
    <p class="section-title">Activities</p>
    <div class="activity-list">
      <div v-for="activity in activities" :key="activity.title" class="activity-item">
        <div class="activity-header">
          <h3>{{ activity.title }}</h3>
          <span class="period">{{ activity.period }}</span>
        </div>
        <p v-if="activity.description" class="desc">{{ activity.description }}</p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const activities = [
  {
    title: '전교 학생회장 위임',
    period: '2025.07 – 진행중',
    description: null,
  },
  {
    title: '전공 동아리 부장',
    period: '2025.03 – 진행중',
    description: null,
  },
  {
    title: 'IT 연합 컨퍼런스 발표',
    period: '2025.10.25',
    description: null,
  },
  {
    title: 'AI tech+ 발표',
    period: '2025.10.17',
    description: null,
  },
  {
    title: 'FE 스터디',
    period: '2024.07 – 진행중',
    description: null,
  },
]
</script>

<style scoped>
.activity-list {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.activity-item {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.activity-header {
  display: flex;
  align-items: baseline;
  gap: 12px;
  flex-wrap: wrap;
}

h3 {
  font-size: 15px;
  font-weight: 600;
  color: var(--black);
}

.period {
  font-size: 12px;
  color: var(--gray-400);
}

.desc {
  font-size: 14px;
  color: var(--gray-600);
  line-height: 1.7;
}
</style>
