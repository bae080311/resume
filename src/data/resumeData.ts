import type { Project, SkillGroup, Award, Activity } from './types'

export const projects: Project[] = [
  {
    title: '시민화폐, 광산',
    period: '2025.02 – 2025.10',
    description:
      '광주광역시 광산구 주민 390,000+명을 대상으로 한 지역 기반 실서비스. 가상 화폐 \'광산\'을 통해 주민 간 물품과 서비스를 거래할 수 있는 플랫폼',
    role: 'Team Leader, FrontEnd, App',
    team: 'FE 2명, App 2명, BE 2명, Design 1명, DevOps 1명',
    github: 'https://github.com/School-of-Company/Gwangsan-Crossplatform',
    sections: [
      {
        name: '어드민 관리 페이지',
        items: [
          '역할 변경, 상태 변경 등 즉각적인 피드백이 필요한 항목에 낙관적 업데이트 적용으로 사용자 편의성 향상',
          'Chart.js를 활용하여 거래량 통계 원 그래프 구현 (지점 및 본점 단위 구분)',
        ],
      },
      {
        name: '프로필',
        items: [
          '쿼리 파라미터로 id를 받아 myId === profileId 비교로 내 프로필·상대 프로필 뷰를 단일 컴포넌트로 재활용',
          '밝기 BAR 커스텀 구현 — 단계별로 게이지가 차오르는 애니메이션 퍼블리싱',
        ],
      },
      {
        name: '모바일 앱/웹 배포·운영 자동화 인프라 구축',
        items: [
          'GitHub Actions + EAS를 활용해 Android·iOS 자동 빌드 및 배포 파이프라인 구축, main 브랜치 기준 배포 자동화',
          '환경 변수를 EAS Secret으로 관리하고, Sentry 크래시 수집 → 장애 발생 시 Discord Bot 실시간 알림 구성',
          'Android·iOS 모두 학교 법인 계정을 직접 생성해 실제 배포 수행',
          'PR 단위 Vitest 테스트 자동 실행 및 GitHub Actions + Vercel CI/CD 구축',
        ],
      },
      {
        name: '트러블 슈팅 — 실제 iOS 기기에서 form UI 깨짐',
        items: [
          '문제: 에뮬레이터·안드로이드에서는 정상이나 실제 iOS 기기에서 수정 form의 모든 요소가 뭉쳐 보이는 현상',
          '원인: ScrollView 자식에 flex-1 적용 시 무한 확장되는 ScrollView 특성과 충돌',
          '해결: flex-1 제거 후 NativeWind의 space-y로 간격 처리, 전 기기 환경에서 정상 확인',
        ],
      },
      {
        name: '트러블 슈팅 — 가상 스크롤 적용',
        items: [
          '문제: 렌더링 요소 과다로 FPS 30까지 저하, 스크롤 끊김 발생',
          '해결: 가상 스크롤(virtualized list) 적용으로 화면에 보이는 구간만 렌더링, 55~60 FPS 안정적 유지',
        ],
      },
    ],
    techs: [
      'Expo',
      'TypeScript',
      'React Native',
      'React',
      'Expo Router',
      'NativeWind',
      'TanStack Query',
      'Zustand',
      'Socket.IO',
      'Zod',
      'Axios',
    ],
  },
  {
    title: 'Xconda',
    period: '2025.12 – 진행중',
    description:
      'Cubeberry와의 산학협력 프로젝트. Google Veo·Runway·Kling 등 16개 AI 도구를 통합한 이미지·비디오 생성 플랫폼. 크레딧 기반 결제 시스템으로 서비스 제공',
    role: 'FrontEnd, BackEnd',
    team: '산학협력 기업: Cubeberry',
    sections: [
      {
        name: 'AI 스튜디오 도구 풀스택 구현',
        items: [
          '시네마틱 스토리보드·Cloth Swap·Cine-Grid·Red Arrow View·CineGrade·Image Upscale 총 6개 도구의 서버 API 및 클라이언트 페이지 구현',
          '크레딧 선차감 → AI Provider(Google GenAI·Runway·Kling 등) 호출 → 웹훅 결과 수신의 비동기 처리 흐름을 도구별로 구축',
          'Starting → Processing → Succeeded/Failed 상태 흐름 관리 및 실패 시 크레딧 자동 환불 처리',
        ],
      },
      {
        name: 'Image Upscale 히스토리 UI 개선',
        items: [
          '최신 결과를 상단에 크게 표시하고 이전 결과를 History 섹션으로 분리하여 결과 탐색 편의성 향상',
          'larg prop 추가로 결과 이미지 크기(width 100% / max-height 55vh) 동적 제어',
          '결과 조회 범위를 1시간/1개 → 24시간/100개로 확장',
        ],
      },
      {
        name: '트러블 슈팅 — Firestore 구독 시 이전 데이터 노출',
        items: [
          '문제: docId 변경 시 data.value 초기화 누락으로 구독 전환 중 이전 결과가 잠깐 노출',
          '해결: watch에서 newId 진입 시점에 data.value = null로 즉시 초기화하여 잔상 제거',
        ],
      },
    ],
    techs: [
      'Nuxt 4',
      'TypeScript',
      'Vue 3',
      'Tailwind CSS',
      'Pinia',
      'Firebase',
      'Firestore',
      'Google GenAI',
      'Cloudflare R2',
    ],
  },
  {
    title: '光탈페(광주탈렌트페스티벌)',
    period: '2025.02 – 2025.10',
    description:
      '광주학생탈렌트페스티벌 행사 관리 공식 웹 서비스. 행사 당일 DAU 3,000+명, 누적 트래픽 73,000+건, 이벤트 50,000+건 처리. 기존 외주 업체 대비 1천만 원 비용 절감',
    role: 'Team Leader, FrontEnd',
    team: 'FE 3명, BE 3명, Design 2명, DevOps 1명',
    github: 'https://github.com/School-of-Company/Gwangju-talent-festival-Client',
    sections: [
      {
        name: '슬로건 공모 페이지',
        items: [
          'Debounce 적용으로 학교 검색 API 요청 횟수 70% 감소',
          'Zod를 활용해 정적 타입 검사와 런타임 유효성 검사를 함께 적용하여 타입 안정성과 신뢰성 향상',
          'Web Share API를 활용한 공유 기능 구현',
        ],
      },
      {
        name: '심사 페이지',
        items: [
          'SSE를 사용하여 현재 공연 중인 팀을 실시간으로 변경',
          '커스텀 드롭다운 구현 — 더블 클릭 시 점수 직접 입력 가능하도록 사용자 편의 개선',
          '버튼을 공연 완료·심사 완료·공연 전 3가지 state로 나누어 유동적 수정이 가능하도록 구현',
        ],
      },
      {
        name: '트러블 슈팅 — 팀소개 GitHub API CORS 및 요청 수 초과',
        items: [
          '문제: CSR 방식의 GitHub API 호출로 CORS 발생, 하루 5,000회 요청 한도 초과 우려, Redis 유지 비용 발생',
          '해결: API handler로 SSR 전환해 CORS 제거, Redis 일 1회 캐싱으로 요청 수 절감, 이후 Notion DB로 마이그레이션해 비용 제거',
        ],
      },
      {
        name: '트러블 슈팅 — 토큰 재발급 무한 반복',
        link: 'https://baeougi.tistory.com/75',
        items: [
          '문제: 페이지 진입 시 다수 API 요청이 동시에 401을 트리거 → 리프레시 토큰 로테이션 정책과 충돌해 재발급이 무한 반복',
          '해결: 재발급을 단 한 번만 수행하도록 단일화, 나머지 요청은 큐에 적재 후 새 토큰으로 순차 재시도하여 경쟁 제거',
        ],
      },
      {
        name: '트러블 슈팅 — SSE 이벤트 미수신',
        items: [
          '문제: SSE 연결은 되었지만 유사한 역할의 API 두 개를 동시 호출하며 충돌, 이벤트 수신 불가',
          '해결: SSE 트리거 시점을 분리하고, 이벤트명에 addEventListener를 등록해 실시간 수신 정상화',
        ],
      },
    ],
    techs: [
      'Next.js 15',
      'TypeScript',
      'React 19',
      'Tailwind CSS',
      'TanStack Query',
      'Zod',
      'Axios',
    ],
  },
]

export const skillGroups: SkillGroup[] = [
  {
    category: 'Language',
    skills: ['TypeScript', 'JavaScript'],
  },
  {
    category: 'Framework / Library',
    skills: ['React', 'React Native', 'Next.js', 'Nest.js', 'Expo', 'TanStack Query', 'Zustand', 'Redux'],
  },
  {
    category: 'Styling',
    skills: ['Tailwind CSS', 'NativeWind'],
  },
  {
    category: 'Tooling',
    skills: ['Zod', 'Axios', 'Socket.IO', 'Vitest', 'ESLint', 'Prettier', 'Git', 'Slack', 'Jira'],
  },
  {
    category: 'Infrastructure',
    skills: ['GitHub Actions', 'EAS', 'Vercel', 'Sentry', 'Docker'],
  },
]

export const awards: Award[] = [
  {
    title: '정보통신기획평가원장상',
    date: '2025.11.07',
    organizer: '4개교 연합 해커톤',
    description: 'AI 내장 북리더 앱 — 책 읽기 난이도 자동 조정, React Native App 개발',
  },
  {
    title: '우수상',
    date: '2024.10.07',
    organizer: '한전 빛가람 에너지밸리 소프트웨어 작품대회',
    description: '고독사 방지 앱 개발 — Team Leader, React Native App 개발',
  },
]

export const activities: Activity[] = [
  {
    title: '전교 학생회장 위임',
    period: '2025.07 – 2026.07',
    description: null,
    tooltip: null,
  },
  {
    title: 'FE 스터디장',
    period: '2024.07 – 진행중',
    description: null,
    tooltip: '책 스터디, 블로그 작성 후 발표, 매일 코딩 테스트 풀이',
  },
  {
    title: 'IT 연합 컨퍼런스 발표',
    period: '2025.10.25',
    description: null,
    tooltip: '전국 IT 고등학교 학생들이 교류하고 성장하는 장으로, 지식과 경험을 공유하는 컨퍼런스',
  },
]
