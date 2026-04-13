<template>
  <div class="print-footnotes">
    <p class="footnotes-title">Notes</p>
    <div v-for="entry in entries" :key="entry.id" class="footnote-item">
      <span class="footnote-num">[{{ entry.id }}]</span>
      <span class="footnote-text">{{ entry.text }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useFootnotes } from '../composables/useFootnotes'
const { entries } = useFootnotes()
</script>

<style scoped>
@media screen {
  .print-footnotes {
    display: none;
  }
}

@media print {
  .print-footnotes {
    page-break-before: always;
    padding: 48px 24px 0;
    font-size: 11px;
    color: #333;
  }

  .footnotes-title {
    font-size: 12px;
    font-weight: 700;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: #888;
    margin-bottom: 20px;
  }

  .footnote-item {
    display: flex;
    gap: 10px;
    margin-bottom: 8px;
    line-height: 1.6;
  }

  .footnote-num {
    font-weight: 700;
    color: #555;
    min-width: 28px;
    flex-shrink: 0;
  }

  .footnote-text {
    color: #333;
  }
}
</style>
