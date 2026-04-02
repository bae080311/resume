<template>
  <section id="about">
    <p class="section-title">About</p>
    <div class="about-body">
      <div class="trait">
        <h3>꾸준하고 한결같은 사람입니다</h3>
        <p>
          단기간의 몰입보다 매일 조금씩 성장하는 것을 더 중요하게 생각합니다.<br />
          매일 코딩 테스트를 풀이해 <strong>240개+</strong> 문제를
          해결했습니다.<br />
          또한 기술 블로그를 운영하며 매주 1편 이상, 지금까지 총
          <strong>70편+</strong>의 글을 꾸준히 작성해 왔습니다.
        </p>
      </div>
      <div class="trait">
        <h3>물처럼 유연한 사람입니다</h3>
        <p>
          어떤 환경에도 자연스럽게 스며들어 빠르게 적응하고, 주변과 조화를
          이루며 함께 성과를 만들어내는 사람입니다.<br />
          새로운 기술이나 낯선 상황에서도 유연하게 대응할 수 있으며, 팀원들과의
          협업 속에서 더 좋은 결과를 만드는 데 강점이 있습니다.<br />
          학교에서는 <strong>전교 학생회장</strong>으로 활동하며 다양한 사람들과
          원활하게 소통했습니다.<br />
          또한
          <Tooltip
            text="외부 기관과 협업 프로젝트를 주로 수행하는 팀"
            :index="1"
            ><strong>학교기업 팀의 리더</strong></Tooltip
          >로서, 여러 이해관계자와 협업하며 팀을 이끌어 왔습니다.
        </p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import Tooltip from "./Tooltip.vue";
</script>

<style scoped>
.about-body {
  display: flex;
  flex-direction: column;
  gap: 32px;
  max-width: 620px;
}

.trait h3 {
  font-size: 15px;
  font-weight: 700;
  color: var(--black);
  margin-bottom: 10px;
}

.trait p {
  font-size: 14px;
  color: var(--gray-800);
  line-height: 1.9;
}

.trait strong {
  color: var(--black);
  font-weight: 700;
}
</style>
