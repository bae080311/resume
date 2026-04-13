<template>
  <span class="tooltip-wrap">
    <slot />
    <sup class="mark">[{{ displayIndex }}]</sup>
    <span class="tooltip">{{ text }}</span>
  </span>
</template>

<script setup lang="ts">
import { onUnmounted } from 'vue'
import { useFootnotes } from '../composables/useFootnotes'

const props = defineProps<{
  text: string
  index: number | string
}>()

const { register, unregister } = useFootnotes()
const displayIndex = register(props.text)
onUnmounted(() => unregister(displayIndex))
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
  background: var(--gray-800);
  color: var(--bg);
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
  border-top-color: var(--gray-800);
}

.tooltip-wrap:hover .tooltip {
  visibility: visible;
  opacity: 1;
}

@media print {
  .tooltip {
    display: none;
  }

  .mark {
    font-size: 9px;
    font-weight: 700;
    color: #555;
  }
}
</style>
