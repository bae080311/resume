import { ref } from 'vue'

export interface FootnoteEntry {
  id: number
  text: string
}

const entries = ref<FootnoteEntry[]>([])
let counter = 0

export function useFootnotes() {
  function register(text: string): number {
    counter++
    const id = counter
    entries.value.push({ id, text })
    return id
  }

  function unregister(id: number) {
    entries.value = entries.value.filter(e => e.id !== id)
    counter--
  }

  return { entries, register, unregister }
}
