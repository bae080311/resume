<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { usePortfolioChannel } from '../composables/usePortfolioChannel'
import { portfolioChannelList } from '../data/portfolioChannels'

const isDark = ref(false)
const { activeChannelId, selectChannel } = usePortfolioChannel()

function navigateChannel(event: MouseEvent, channelId: (typeof portfolioChannelList)[number]['id']): void {
  if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return
  event.preventDefault()
  selectChannel(channelId)
}

function toggleTheme() {
  isDark.value = !isDark.value
  const theme = isDark.value ? 'dark' : 'light'
  document.documentElement.setAttribute('data-theme', theme)
  localStorage.setItem('theme', theme)
}

onMounted(() => {
  const saved = localStorage.getItem('theme')
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
  if (saved === 'dark' || (!saved && prefersDark)) {
    isDark.value = true
    document.documentElement.setAttribute('data-theme', 'dark')
  }
})
</script>

<template>
  <header>
    <div class="header-inner">
      <div class="identity">
        <span class="logo">배경진</span>
        <div class="channel-switch" role="navigation" aria-label="포트폴리오 채널">
          <a
            v-for="channel in portfolioChannelList"
            :key="channel.id"
            :href="channel.path"
            class="channel-link"
            :class="{ 'is-active': activeChannelId === channel.id }"
            :aria-current="activeChannelId === channel.id ? 'page' : undefined"
            @click="navigateChannel($event, channel.id)"
          >
            {{ channel.label }}
          </a>
        </div>
      </div>
      <div class="header-right">
        <nav>
          <a href="#about">소개</a>
          <a href="#skills">기술</a>
          <a href="#projects">프로젝트</a>
          <a href="#awards">수상</a>
          <a href="#education">학력</a>
        </nav>
        <button class="theme-toggle" @click="toggleTheme" :aria-label="isDark ? '라이트 모드로 전환' : '다크 모드로 전환'">
          <svg v-if="isDark" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/>
            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
            <line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/>
            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
          </svg>
          <svg v-else width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
          </svg>
        </button>
      </div>
    </div>
  </header>
</template>

<style scoped>
header {
  position: fixed;
  top: 0; left: 0; right: 0;
  z-index: 999;
  background: var(--header-bg);
  backdrop-filter: blur(16px);
  border-bottom: 1px solid var(--gray-100);
}

.header-inner {
  max-width: var(--max-w);
  margin: 0 auto;
  padding: 0 24px;
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.logo {
  font-size: 15px;
  font-weight: 700;
  letter-spacing: -0.3px;
}

.identity {
  display: flex;
  align-items: center;
  gap: 16px;
}

.channel-switch {
  display: flex;
  padding: 3px;
  border: 1px solid var(--gray-200);
  border-radius: 8px;
  background: var(--gray-50);
}

.channel-link {
  display: inline-flex;
  align-items: center;
  min-height: 28px;
  padding: 0 11px;
  border: 0;
  border-radius: 5px;
  background: transparent;
  color: var(--gray-600);
  font: inherit;
  font-size: 12px;
  font-weight: 600;
  cursor: pointer;
}

.channel-link:hover {
  color: var(--black);
}

.channel-link.is-active {
  background: var(--white);
  color: var(--accent);
  box-shadow: 0 1px 4px rgba(15, 23, 42, 0.08);
}

.channel-link:focus-visible {
  outline: 2px solid var(--accent);
  outline-offset: 1px;
}

.header-right {
  display: flex;
  align-items: center;
  gap: 16px;
}

nav { display: flex; gap: 24px; }

nav a {
  font-size: 13px;
  font-weight: 500;
  color: var(--gray-600);
  transition: color 0.15s;
}

nav a:hover { color: var(--black); }

.theme-toggle {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border: 1px solid var(--gray-200);
  border-radius: 8px;
  background: transparent;
  color: var(--gray-600);
  cursor: pointer;
  transition: color 0.15s, border-color 0.15s, background 0.15s;
  flex-shrink: 0;
}

.theme-toggle:hover {
  color: var(--black);
  background: var(--gray-50);
  border-color: var(--gray-400);
}

@media (max-width: 600px) {
  nav { display: none; }

  .header-inner {
    padding: 0 16px;
  }

  .identity {
    gap: 10px;
  }

  .channel-link {
    padding: 0 8px;
  }
}

@media (max-width: 430px) {
  .logo { display: none; }

  .channel-link {
    padding: 0 7px;
    font-size: 11px;
  }
}
</style>
