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
  { threshold: 1.0 },
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
      <div class="animate-bottom flex" :ref="(element) => (refs[0] = element)">
        <ULandingCard
          class="h-[18rem]"
          to="/#landing"
          title="Schedule and Results"
          description="View the tournament schedule, live scores, and match results. All the key details for following the tournament are here."
          icon="i-heroicons-document-chart-bar"
        />
        <ULandingCard
          class="mx-8 h-[18rem]"
          to="/all-tournament"
          title="All Tournament"
          description="Get details on every match and team in the tournament. Find standings and team information in one place."
          icon="i-heroicons-trophy"
        />
        <ULandingCard
          class="h-[18rem]"
          to=""
          target="_blank"
          title="Spectator Tickets"
          description="Buy tickets to watch the tournament live. Join us for exciting matches and support your favorite teams."
          icon="i-heroicons-ticket"
        />
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
