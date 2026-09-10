export type PortfolioChannelId = 'frontend' | 'backend' | 'product-engineer'

export interface PortfolioChannel {
  id: PortfolioChannelId
  path: `/${PortfolioChannelId}`
  label: string
  role: string
  projectTitles: readonly string[]
  skills: readonly string[]
  solvedProblems: string
  blogPosts: string
}

export const portfolioChannels: Record<PortfolioChannelId, PortfolioChannel> = {
  frontend: {
    id: 'frontend',
    path: '/frontend',
    label: '프론트엔드',
    role: '프론트엔드 개발자',
    projectTitles: ['시민화폐, 광산', '光탈페(광주탈렌트페스티벌)'],
    skills: [
      'TypeScript',
      'JavaScript',
      'React',
      'React Native',
      'Next.js',
      'Expo',
      'TanStack Query',
      'Zustand',
      'Tailwind CSS',
      'NativeWind',
      'Zod',
      'Axios',
      'Socket.IO',
      'Vitest',
      'GitHub Actions',
      'EAS',
      'Vercel',
      'Sentry',
    ],
    solvedProblems: '300개+',
    blogPosts: '80편+',
  },
  backend: {
    id: 'backend',
    path: '/backend',
    label: '백엔드',
    role: '백엔드 개발자',
    projectTitles: ['Upstream', 'Xconda'],
    skills: [
      'TypeScript',
      'JavaScript',
      'Node.js',
      'Fastify',
      'Nuxt',
      'Vue',
      'PostgreSQL',
      'Firebase',
      'Firestore',
      'BigQuery',
      'Docker',
      'AWS ALB',
      'AWS EKS',
      'AWS Lambda',
      'AWS SQS',
      'AWS EventBridge',
      'AWS S3',
      'ArgoCD',
      'Serverless Framework',
      'Bitbucket Pipelines',
    ],
    solvedProblems: '280개+',
    blogPosts: '70편+',
  },
  'product-engineer': {
    id: 'product-engineer',
    path: '/product-engineer',
    label: 'Product Engineer',
    role: 'Product Engineer',
    projectTitles: [
      '시민화폐, 광산',
      '光탈페(광주탈렌트페스티벌)',
      'Upstream',
      'Xconda',
    ],
    skills: [
      'TypeScript',
      'JavaScript',
      'React',
      'React Native',
      'Next.js',
      'Expo',
      'TanStack Query',
      'Zustand',
      'Tailwind CSS',
      'NativeWind',
      'Zod',
      'Axios',
      'Socket.IO',
      'Vitest',
      'Node.js',
      'Fastify',
      'Nuxt',
      'Vue',
      'PostgreSQL',
      'Firebase',
      'Firestore',
      'BigQuery',
      'Docker',
      'AWS ALB',
      'AWS EKS',
      'AWS Lambda',
      'AWS SQS',
      'AWS EventBridge',
      'AWS S3',
      'ArgoCD',
      'Serverless Framework',
      'Bitbucket Pipelines',
      'GitHub Actions',
      'EAS',
      'Vercel',
      'Sentry',
    ],
    solvedProblems: '300개+',
    blogPosts: '80편+',
  },
}

export const portfolioChannelList = [
  portfolioChannels['product-engineer'],
  portfolioChannels.frontend,
  portfolioChannels.backend,
]

export function isPortfolioChannelId(value: string | null): value is PortfolioChannelId {
  return value === 'frontend' || value === 'backend' || value === 'product-engineer'
}
