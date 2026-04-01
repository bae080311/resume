<template>
  <span class="tooltip-wrap">
    <slot />
    <sup class="mark">[{{ index }}]</sup>
    <span class="tooltip">{{ text }}</span>
  </span>
</template>

<script setup lang="ts">
defineProps<{
  text: string
  index: number | string
}>()
</script>

<style scoped>
.tooltip-wrap {
  position: relative;
  display: inline;
}

.mark {
  font-size: 10px;
  font-weight: 700;
  color: var(--accent);
  cursor: default;
  margin-left: 1px;
  vertical-align: super;
  line-height: 1;
}

.tooltip {
  visibility: hidden;
  opacity: 0;
  position: absolute;
  bottom: calc(100% + 8px);
  left: 50%;
  transform: translateX(-50%);
  background: #1a1a1a;
  color: #f5f5f5;
  font-size: 12px;
  font-weight: 500;
  white-space: nowrap;
  padding: 6px 12px;
  border-radius: 6px;
  pointer-events: none;
  transition: opacity 0.15s;
  z-index: 100;
}

.tooltip::after {
  content: '';
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  border: 5px solid transparent;
  border-top-color: #1a1a1a;
}

.tooltip-wrap:hover .tooltip {
  visibility: visible;
  opacity: 1;
}
</style>
