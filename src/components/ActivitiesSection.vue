<template>
  <section id="activities">
    <p class="section-title">Activities</p>
    <div class="activity-list">
      <div
        v-for="(activity, i) in activities"
        :key="activity.title"
        class="activity-item"
      >
        <div class="activity-header">
          <h3>
            <Tooltip v-if="activity.tooltip" :text="activity.tooltip" :index="i + 1">{{ activity.title }}</Tooltip>
            <template v-else>{{ activity.title }}</template>
          </h3>
          <span class="period">{{ activity.period }}</span>
        </div>
        <p v-if="activity.description" class="desc">
          {{ activity.description }}
        </p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import Tooltip from "./Tooltip.vue";

const activities = [
  {
    title: "전교 학생회장 위임",
    period: "2025.07 – 2026.07",
    description: null,
    tooltip: null,
  },
  {
    title: "FE 스터디장",
    period: "2024.07 – 진행중",
    description: null,
    tooltip: "책 스터디, 블로그 작성 후 발표, 매일 코딩 테스트 풀이",
  },
  {
    title: "IT 연합 컨퍼런스 발표",
    period: "2025.10.25",
    description: null,
    tooltip: "전국 IT 고등학교 학생들이 교류하고 성장하는 장으로, 지식과 경험을 공유하는 컨퍼런스",
  },
];
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
