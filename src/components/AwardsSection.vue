<template>
  <section id="awards">
    <p class="section-title">Awards</p>
    <div class="award-list">
      <div
        v-for="award in awards"
        :key="award.title + award.date"
        class="award-item"
      >
        <div class="award-header">
          <h3>{{ award.title }}</h3>
          <span class="date">{{ award.date }}</span>
        </div>
        <p class="organizer">{{ award.organizer }}</p>
        <p v-if="award.description" class="desc">{{ award.description }}</p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const awards = [
  {
    title: "정보통신기획평가원장상",
    date: "2025.11.07",
    organizer: "4개교 연합 해커톤",
    description: null,
  },
  {
    title: "우수상",
    date: "2024.10.07",
    organizer: "한전 빛가람 에너지밸리 소프트웨어 작품대회",
    description: null,
  },
];
</script>

<style scoped>
.award-list {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.award-item {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.award-header {
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

.date {
  font-size: 12px;
  color: var(--gray-400);
}

.organizer {
  font-size: 13px;
  color: var(--gray-600);
}

.desc {
  margin-top: 4px;
  font-size: 14px;
  color: var(--gray-600);
  line-height: 1.7;
}
</style>
