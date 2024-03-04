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
  { threshold: 0.3 },
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
      <div class="animate-bottom lg:flex" :ref="(element) => (refs[0] = element)">
        <ULandingCard
          class="h-[18rem]"
          to="/"
          target="_blank"
          title="Schedule and Results"
          description="View the tournament schedule, live scores, and match results. All the key details for following the tournament are here. Don't miss a beat. Stay up to date with the latest scores and results."
          icon="i-heroicons-document-chart-bar"
        />
        <ULandingCard
          class="my-8 h-[18rem] lg:mx-8 lg:my-0"
          to="/all-tournament"
          title="All Tournament"
          description="Experience the pinnacle of competition where elite players from each position team up for exclusive scrimmages. Discover the best of the best as they showcase their skills in a series of high-stakes matches."
          icon="i-heroicons-trophy"
        />
        <ULandingCard
          class="h-[18rem]"
          to=""
          target="_blank"
          title="Spectator Tickets"
          description="Buy tickets to watch the tournament live. Join us for exciting matches and support your favorite teams. Get your tickets now and be part of the action. Don't miss out on the excitement."
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
