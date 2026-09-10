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
        name: '생체 인증 (Face ID / 지문)',
        items: [
          'react-native-keychain의 생체 인증 호출을 비동기로 분리해 UI 스레드 점유 해소',
          'BIOMETRY_ANY + WHEN_UNLOCKED 정책을 적용하고 미등록 기기의 자격 증명 저장 실패 방지',
          '인증 과정에서 발생하던 오류율을 약 40%에서 0%로 개선',
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
          '해결: @tanstack/react-virtual을 적용해 화면에 필요한 구간만 렌더링하고 FPS를 55~60 수준으로 회복',
          '50명 이상의 사용자 평가에서 평균 4.7점 이상, 응답자의 90% 이상이 개선 버전을 선호',
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
    period: '2026.03 – 2026.06',
    description:
      '북미 시장을 대상으로 한 AI 이미지·영상 생성 올인원 SaaS 플랫폼. Functions 2,100+회/주 호출, Firestore 읽기 4,400+회/일 규모로 운영',
    role: 'Full Stack',
    team: '산학협력 기업: Cubeberry',
    sections: [
      {
        name: "Director's Sequence 신규 기능",
        items: [
          '씬 8개 일괄 생성·그룹화·Resume UI와 서버 API 전체 개발',
          '페이지 재진입 시 미완료 씬 전체에 실시간 리스너를 재부착해 상태 누락 0건으로 개선',
          '서버·워커·상수 3개 파일에 프롬프트 필드를 추가해 장르별 스타일 이탈 문제 해결',
        ],
      },
      {
        name: '결제 시스템 통합',
        items: [
          'fast-geoip으로 서버 IP 국가를 판별해 국내·해외 결제 플로우 자동 분기',
          'PayPal eCheck의 pre-success 이벤트를 예외 처리해 웹훅 500 오류를 200 정상 응답으로 개선',
          'Topaz 업스케일 출력 MP 기반 계단식 tier 과금 로직 설계',
        ],
      },
      {
        name: '관리자 페이지·코드 품질',
        items: [
          'BigQuery로 마이그레이션해 Firestore 의존도를 낮추고 연산 비용 절감',
          '결제 테이블·이메일 검색·월 기준 기간 필터를 추가해 관리자 조회 효율 개선',
          'sharp 품질값을 80에서 95로 높이고 JPEG·PNG·WebP별 인코딩 분기를 적용해 AI 결과물 품질 보존',
        ],
      },
      {
        name: '트러블 슈팅 — 멀티 이미지 크레딧 차감',
        items: [
          '문제: 여러 장을 생성해도 고정값 1만 계산되어 1장 분의 크레딧만 차감',
          '해결: numRslts를 차감 계산에 반영하고 1장·2장·4장 케이스를 검증해 최대 75%의 수익 누수 차단',
        ],
      },
      {
        name: '트러블 슈팅 — PayPal eCheck 웹훅 처리',
        items: [
          '문제: 비동기 결제의 PayPending 이벤트를 처리하지 못해 웹훅이 500을 반환하고 결제 상태가 불일치',
          '해결: PayPending 문서를 먼저 생성하고 최종 승인 이벤트에서 갱신하는 2단계 처리 구조로 개선',
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
      'PostgreSQL',
      'Gemini API',
      'PortOne',
      'GA4',
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
          '문제: 탭 전환·네트워크 오류·연결 끊김 이후 SSE 스트림이 복구되지 않아 데이터 갱신 누락',
          '해결: SSE 트리거 시점을 분리하고 online·visibilitychange 이벤트에서 연결을 자동 복구하도록 개선',
        ],
      },
      {
        name: '트러블 슈팅 — 좌석 예매 상태 공유',
        items: [
          '문제: 예매 상태가 여러 컴포넌트에 분산되어 prop drilling이 발생하고 좌석 배치도에 낙관적 업데이트 미적용',
          '해결: Zustand bookingStore로 상태를 통합하고 오버부킹 방지 가드와 선점 좌석 자동 해제 로직 추가',
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
  {
    title: 'Upstream',
    period: '2026.07 – 2026.08',
    description:
      '한의사 80% 이상이 사용하는 한의원 통합 관리 서비스. 세금계산서·카드·계좌 자동 수집부터 결재 워크플로우, 손익 분석, 예산 관리까지 재무 기능 백엔드 전담 개발',
    role: 'Backend Developer (인티그레이션 체험형 인턴)',
    team: '재무 기능 백엔드 단독 담당',
    sections: [
      {
        name: 'AWS 인프라 설계',
        items: [
          'ALB → EKS(IRSA) Fastify Public API와 Lambda(EventBridge + SQS) 배치를 분리한 하이브리드 구조 설계',
          '재무 서비스 전용 RDS Aurora PostgreSQL 인스턴스를 신규 생성하고 배치 작업을 별도 컴퓨팅으로 격리',
        ],
      },
      {
        name: '전자세금계산서·카드·계좌 자동 수집 연동',
        items: [
          '바로빌 SOAP 연동과 스케줄러 → SQS → Lambda 워커로 세금계산서·카드·계좌 내역 자동 수집',
          '민감 정보는 AES-256-GCM으로 암호화하고 200일 조회 제한은 구간 분할 호출로 처리',
          '구글 시트가 사라지면서 월 약 4시간이던 작업 시간을 약 75% 단축',
        ],
      },
      {
        name: '트러블 슈팅 — Lambda 번들 외부 라이브러리',
        items: [
          '문제: esbuild의 Lambda 번들링에서 CJS 패키지 export 구조 차이로 워커가 초기화 단계에서 종료',
          '해결: named/default export를 함께 처리하는 헬퍼와 공용 banner 설정을 EKS·Lambda에 적용하고 회귀 테스트 추가',
        ],
      },
      {
        name: '트러블 슈팅 — 커서 페이지네이션 누락',
        items: [
          '문제: JS Date의 밀리초와 DB 컬럼의 마이크로초 정밀도 차이로 페이지 경계 행이 누락',
          '해결: (ms 절단값, μs 나머지, id) 3단 타이브레이크를 적용해 15만 건 검증에서 누락률 0.072%를 0%로 개선',
        ],
      },
      {
        name: '트러블 슈팅 — 월 단위 계산 불일치',
        items: [
          '문제: 예산·손익 여러 파일에 월 경계·윤년·말일 처리 로직이 중복되어 결과 불일치 발생',
          '해결: 월 산술 로직을 공용 모듈로 통합하고 13,860개 케이스를 기존 로직과 전수 비교해 불일치 0건 확인',
        ],
      },
    ],
    techs: [
      'Fastify',
      'TypeScript',
      'Node.js',
      'Docker',
      'RDS Aurora PostgreSQL',
      'AWS ALB',
      'AWS EKS',
      'AWS Lambda',
      'AWS SQS',
      'AWS EventBridge',
      'AWS S3',
      'Bitbucket Pipelines',
      'ArgoCD',
      'Serverless Framework',
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
    skills: ['React', 'React Native', 'Next.js', 'Nest.js', 'Expo', 'TanStack Query', 'Zustand', 'Redux', 'Node.js', 'Fastify', 'Nuxt', 'Vue'],
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
    category: 'Data',
    skills: ['PostgreSQL', 'Firebase', 'Firestore', 'BigQuery'],
  },
  {
    category: 'Infrastructure',
    skills: ['GitHub Actions', 'EAS', 'Vercel', 'Sentry', 'Docker', 'AWS ALB', 'AWS EKS', 'AWS Lambda', 'AWS SQS', 'AWS EventBridge', 'AWS S3', 'ArgoCD', 'Serverless Framework', 'Bitbucket Pipelines'],
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
    title: '인티그레이션 체험형 인턴',
    period: '2026.07 – 2026.08',
    description: '한의원 통합 관리 서비스 Upstream 재무 기능 백엔드 전담 개발',
    tooltip: null,
  },
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
  {
    title: 'AI tech+ 발표',
    period: '2025.10.17',
    description: null,
    tooltip: null,
  },
]
