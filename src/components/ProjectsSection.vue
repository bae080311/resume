<template>
  <section id="projects">
    <p class="section-title">Projects</p>
    <div class="project-list">
      <div
        v-for="(project, i) in projects"
        :key="project.title"
        class="project-item"
      >
        <div class="project-header">
          <div class="project-title-row">
            <h3>
              <Tooltip :text="project.team" :index="i + 1">{{
                project.title
              }}</Tooltip>
            </h3>
            <span class="period">{{ project.period }}</span>
          </div>
          <p class="sub">{{ project.description }}</p>
          <p class="role">{{ project.role }}</p>
        </div>
        <div class="contributions">
          <div
            v-for="section in project.sections"
            :key="section.name"
            class="contrib-section"
          >
            <p class="contrib-title">{{ section.name }}</p>
            <ul>
              <li v-for="item in section.items" :key="item">{{ item }}</li>
            </ul>
          </div>
        </div>
        <div class="tech-tags">
          <span v-for="tech in project.techs" :key="tech" class="tech">{{
            tech
          }}</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import Tooltip from "./Tooltip.vue";

const projects = [
  {
    title: "시민화폐, 광산",
    period: "2025.02 – 2025.10",
    description:
      "광주광역시 광산구 주민 390,000+명을 대상으로 한 지역 기반 실서비스. 가상 화폐 '광산'을 통해 주민 간 물품과 서비스를 거래할 수 있는 플랫폼",
    role: "Team Leader, FrontEnd, App",
    team: "FE 2명, App 2명, BE 2명, Design 1명, DevOps 1명",
    sections: [
      {
        name: "어드민 관리 페이지",
        items: [
          "역할 변경, 상태 변경 등 즉각적인 피드백이 필요한 항목에 낙관적 업데이트 적용으로 사용자 편의성 향상",
          "Chart.js를 활용하여 거래량 통계 원 그래프 구현 (지점 및 본점 단위 구분)",
        ],
      },
      {
        name: "모바일 앱/웹 배포·운영 자동화 인프라 구축",
        items: [
          "GitHub Actions + EAS를 활용해 Android·iOS 자동 빌드 및 배포 파이프라인 구축, main 브랜치 기준 배포 자동화",
          "환경 변수를 EAS Secret으로 관리하고, Sentry 크래시 수집 → 장애 발생 시 Discord Bot 실시간 알림 구성",
          "Android·iOS 모두 학교 법인 계정을 직접 생성해 실제 배포 수행",
          "PR 단위 Vitest 테스트 자동 실행 및 GitHub Actions + Vercel CI/CD 구축",
        ],
      },
      {
        name: "트러블 슈팅 — 가상 스크롤 적용",
        items: [
          "문제: 렌더링 요소 과다로 FPS 30까지 저하, 스크롤 끊김 발생",
          "해결: 가상 스크롤(virtualized list) 적용으로 화면에 보이는 구간만 렌더링, 55~60 FPS 안정적 유지",
        ],
      },
    ],
    techs: [
      "Expo",
      "TypeScript",
      "React Native",
      "React",
      "Expo Router",
      "NativeWind",
      "TanStack Query",
      "Zustand",
      "Socket.IO",
      "Zod",
      "Axios",
    ],
  },
  {
    title: "Xconda",
    period: "2025.12 – 진행중",
    description:
      "Cubeberry와의 산학협력 프로젝트. Google Veo·Runway·Kling 등 16개 AI 도구를 통합한 이미지·비디오 생성 플랫폼. 크레딧 기반 결제 시스템으로 서비스 제공",
    role: "FrontEnd, BackEnd",
    team: "산학협력 기업: Cubeberry",
    sections: [
      {
        name: "AI 스튜디오 도구 구현",
        items: [
          "시네마틱 스토리보드·옷 갈아입히기(Cloth Swap)·Cine-Grid·Red Arrow View·CineGrade·Image Upscale 총 6개 도구의 서버 API 및 클라이언트 페이지 구현",
          "크레딧 선차감 → AI Provider 호출 → 웹훅 결과 수신의 비동기 처리 흐름을 도구별로 구축",
        ],
      },
      {
        name: "Image Upscale 히스토리 UI 개선",
        items: [
          "최신 결과를 상단에 크게 표시하고 이전 결과를 History 섹션으로 분리하여 결과 탐색 편의성 향상",
          "결과 조회 범위를 1시간/1개 → 24시간/100개로 확장",
        ],
      },
      {
        name: "트러블 슈팅 — Firestore 구독 시 이전 데이터 노출",
        items: [
          "문제: docId 변경 시 data.value 초기화 누락으로 구독 전환 중 이전 결과가 잠깐 노출",
          "해결: watch에서 newId 진입 시점에 data.value = null로 즉시 초기화하여 잔상 제거",
        ],
      },
    ],
    techs: [
      "Nuxt 4",
      "TypeScript",
      "Vue 3",
      "Tailwind CSS",
      "Pinia",
      "Firebase",
      "Firestore",
      "Google GenAI",
      "Cloudflare R2",
    ],
  },
  {
    title: "光탈페(광주탈렌트페스티벌)",
    period: "2025.02 – 2025.10",
    description:
      "광주학생탈렌트페스티벌 행사 관리 공식 웹 서비스. 행사 당일 DAU 3,000+명, 누적 트래픽 73,000+건, 이벤트 50,000+건 처리. 기존 외주 업체 대비 1천만 원 비용 절감",
    role: "Team Leader, FrontEnd",
    team: "FE 3명, BE 3명, Design 2명, DevOps 1명",
    sections: [
      {
        name: "슬로건 공모 페이지",
        items: [
          "Debounce 적용으로 학교 검색 API 요청 횟수 70% 감소",
          "Zod를 활용해 정적 타입 검사와 런타임 유효성 검사를 함께 적용하여 타입 안정성과 신뢰성 향상",
          "Web Share API를 활용한 공유 기능 구현",
        ],
      },
      {
        name: "심사 페이지",
        items: [
          "SSE를 사용하여 현재 공연 중인 팀을 실시간으로 변경",
          "커스텀 드롭다운 구현 — 더블 클릭 시 점수 직접 입력 가능하도록 사용자 편의 개선",
          "버튼을 공연 완료·심사 완료·공연 전 3가지 state로 나누어 유동적 수정이 가능하도록 구현",
        ],
      },
      {
        name: "트러블 슈팅 — 토큰 재발급 무한 반복",
        items: [
          "문제: 페이지 진입 시 다수 API 요청이 동시에 401을 트리거 → 리프레시 토큰 로테이션 정책과 충돌해 재발급이 무한 반복",
          "해결: 재발급을 단 한 번만 수행하도록 단일화, 나머지 요청은 큐에 적재 후 새 토큰으로 순차 재시도하여 경쟁 제거",
        ],
      },
      {
        name: "트러블 슈팅 — SSE 이벤트 미수신",
        items: [
          "문제: SSE 연결은 되었지만 유사한 역할의 API 두 개를 동시 호출하며 충돌, 이벤트 수신 불가",
          "해결: SSE 트리거 시점을 분리하고, 이벤트명에 addEventListener를 등록해 실시간 수신 정상화",
        ],
      },
    ],
    techs: [
      "Next.js 15",
      "TypeScript",
      "React 19",
      "Tailwind CSS",
      "TanStack Query",
      "Zod",
      "Axios",
    ],
  },
];
</script>

<style scoped>
.project-list {
  display: flex;
  flex-direction: column;
  gap: 0;
}

.project-item {
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 48px 0;
  border-bottom: 1px solid var(--gray-100);
}

.project-item:first-child {
  padding-top: 0;
}

.project-item:last-child {
  border-bottom: none;
  padding-bottom: 0;
}

.project-header {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.project-title-row {
  display: flex;
  align-items: baseline;
  gap: 12px;
  flex-wrap: wrap;
}

h3 {
  font-size: 17px;
  font-weight: 700;
  color: var(--black);
}

.period {
  font-size: 12px;
  color: var(--gray-400);
}

.sub {
  margin-top: 4px;
  font-size: 14px;
  color: var(--gray-600);
  line-height: 1.7;
}

.role {
  font-size: 13px;
  color: var(--gray-400);
}

.contributions {
  display: flex;
  flex-direction: column;
  gap: 14px;
}

.contrib-section {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.contrib-title {
  font-size: 13px;
  font-weight: 700;
  color: var(--black);
}

ul {
  padding-left: 18px;
  display: flex;
  flex-direction: column;
  gap: 4px;
}

li {
  font-size: 14px;
  color: var(--gray-600);
  line-height: 1.7;
}

.tech-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}

.tech {
  font-size: 12px;
  font-weight: 700;
  color: var(--accent);
  background: rgba(59, 130, 246, 0.06);
  border: 1px solid rgba(59, 130, 246, 0.2);
  border-radius: 4px;
  padding: 2px 8px;
}
</style>
