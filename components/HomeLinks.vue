<script setup lang="ts">
import { useIntersectionObserver } from "@vueuse/core";

type RefElement = Element | ComponentPublicInstance | null;

const refs = ref<RefElement[]>([]);
const linksSection = ref<any>(null);

const { stop } = useIntersectionObserver(
  linksSection,
  ([{ isIntersecting }]) => {
    if (!isIntersecting) return;

    refs.value.forEach((element: any) => {
      element.style.animationPlayState = "running";
    });

    stop();
  },
  { threshold: 0.0005 },
);

onMounted(() => {
  refs.value.forEach((element: any) => {
    element.style.animationFillMode = "forwards";
    element.style.transformOrigin = "center";
    element.style.animationPlayState = "paused";
    element.style.animationDuration = "1s";
  });
});
</script>

<template>
  <UContainer class="mt-16">
    <section id="info" ref="linksSection">
      <div class="animate-bottom lg:flex" :ref="(element: any) => (refs[0] = element)">
        <ULandingCard
          class="h-[18rem] text-center"
          :ui="{ title: 'text-gray-900 dark:text-white text-base font-bold truncate text-2xl' }"
          to="https://www.gobound.com/host/lwevb/tournaments/R600?b=t"
          target="_blank"
          title="SCHEDULE AND RESULTS"
          description="View tournament schedules and match results"
        >
          <template #icon>
            <UIcon class="mt-10 h-14 w-14" name="i-heroicons-document-chart-bar" />
          </template>
        </ULandingCard>
        <ULandingCard
          class="my-8 h-[18rem] text-center lg:mx-8 lg:my-0"
          :ui="{ title: 'text-gray-900 dark:text-white text-base font-bold truncate text-2xl' }"
          to="/all-tournament"
          title="ALL-TOURNAMENT"
          description="Check here following the tournament for a listing of players selected for the All-Tournament Team."
        >
          <template #icon>
            <UIcon class="mt-10 h-14 w-14" name="i-heroicons-trophy" />
          </template>
        </ULandingCard>
        <ULandingCard
          class="h-[18rem] text-center"
          :ui="{ title: 'text-gray-900 dark:text-white text-base font-bold truncate text-2xl' }"
          to="https://gofan.co/app/school/IL15560"
          target="_blank"
          title="SPECTATOR TICKETS"
          description="Click here to purchase tickets through our online partner, GoFan. Cash will not be accepted at the door."
        >
          <template #icon>
            <UIcon class="mt-10 h-14 w-14" name="i-heroicons-ticket" />
          </template>
        </ULandingCard>
      </div>
    </section>
  </UContainer>
</template>

<style scoped lang="scss">
.animate-top {
  animation: translateDown;
}

.animate-bottom {
  animation: translateUp;
}

.animate-left {
  animation: translateLeft;
}

.animate-right {
  animation-name: translateRight;
}

@keyframes translateDown {
  0% {
    transform: translate3D(0, -100px, 0);
    opacity: 0;
  }

  100% {
    transform: translateY(0, 0, 0);
    opacity: 1;
  }
}

@keyframes translateUp {
  0% {
    transform: translate3D(0, 100px, 0);
    opacity: 0;
  }

  100% {
    transform: translateY(0, 0, 0);
    opacity: 1;
  }
}

@keyframes translateLeft {
  0% {
    transform: translate3D(-100px, 0, 0);
    opacity: 0;
  }

  100% {
    transform: translate3D(0, 0, 0);
    opacity: 1;
  }
}

@keyframes translateRight {
  0% {
    transform: translate3D(100px, 0, 0);
    opacity: 0;
  }

  100% {
    transform: translate3D(0, 0, 0);
    opacity: 1;
  }
}
</style>
