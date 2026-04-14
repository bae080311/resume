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
import { activities } from "../data/activeResume";
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
