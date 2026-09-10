import { computed, ref } from 'vue'
import {
  isPortfolioChannelId,
  portfolioChannels,
  type PortfolioChannelId,
} from '../data/portfolioChannels'

function getInitialChannel(): PortfolioChannelId {
  if (typeof window === 'undefined') return 'product-engineer'

  const url = new URL(window.location.href)
  const pathChannel = url.pathname.replace(/^\/+|\/+$/g, '')
  if (isPortfolioChannelId(pathChannel)) return pathChannel

  const queryChannel = url.searchParams.get('channel')
  if (isPortfolioChannelId(queryChannel)) return queryChannel

  return 'product-engineer'
}

const activeChannelId = ref<PortfolioChannelId>(getInitialChannel())

function syncDocument(channelId: PortfolioChannelId): void {
  if (typeof window === 'undefined') return

  const channel = portfolioChannels[channelId]
  document.documentElement.dataset.portfolioChannel = channelId
  document.title = `배경진 | ${channel.role}`
}

function replaceRoute(channelId: PortfolioChannelId): void {
  if (typeof window === 'undefined') return

  const url = new URL(window.location.href)
  url.pathname = portfolioChannels[channelId].path
  url.searchParams.delete('channel')
  window.history.replaceState(null, '', url)
}

syncDocument(activeChannelId.value)
replaceRoute(activeChannelId.value)

if (typeof window !== 'undefined') {
  window.addEventListener('popstate', () => {
    activeChannelId.value = getInitialChannel()
    syncDocument(activeChannelId.value)
  })
}

export function usePortfolioChannel() {
  const activeChannel = computed(() => portfolioChannels[activeChannelId.value])

  function selectChannel(channelId: PortfolioChannelId): void {
    if (activeChannelId.value === channelId) return
    activeChannelId.value = channelId
    syncDocument(channelId)

    const url = new URL(window.location.href)
    url.pathname = portfolioChannels[channelId].path
    url.searchParams.delete('channel')
    url.hash = ''
    window.history.pushState(null, '', url)
    window.scrollTo({ top: 0, behavior: 'auto' })
  }

  return {
    activeChannel,
    activeChannelId,
    selectChannel,
  }
}
