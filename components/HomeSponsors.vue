<script setup lang="ts">
import { useIntersectionObserver } from "@vueuse/core";

type RefElement = Element | ComponentPublicInstance | null;

const refs = ref<RefElement[]>([]);
const section = ref<any>(null);

const { stop } = useIntersectionObserver(
  section,
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
  <UContainer class="-mt-[10rem]">
    <section class="-scroll-m-[0.5rem] lg:-scroll-m-[2rem]" ref="section">
      <div class="animate-bottom" :ref="(element: any) => (refs[0] = element)">
        <ULandingSection icon="i-heroicons-cube-transparent" title="Sponsors">
          <div class="-mt-8 flex flex-col items-center justify-center lg:-mt-16 lg:grid lg:grid-cols-4 lg:gap-4">
            <div class="flex flex-col items-center">
              <img class="h-[250px] object-contain lg:h-[180px]" src="~/assets/94 Nissan LOGO Flag (1).png" />
              <span class="mt-4 w-full text-center text-xl font-bold lg:text-base">Nissan of South Holland</span>
            </div>
            <div class="flex flex-col items-center">
              <img class="h-[250px] object-contain lg:h-[180px]" src="~/assets/Gattos Logo.png" />
              <span class="mt-4 w-full text-center text-xl font-bold lg:text-base">Gatto's</span>
            </div>
            <div class="flex flex-col items-center">
              <img class="h-[250px] object-contain lg:h-[180px]" src="~/assets/BOUND.png" />
              <span class="mt-4 w-full text-center text-xl font-bold lg:text-base">Bound</span>
            </div>
            <div class="flex flex-col items-center">
              <img class="h-[250px] object-contain lg:h-[180px]" src="~/assets/Filosa.svg" />
              <span class="mt-4 w-full text-center text-xl font-bold lg:text-base">Filosa Family</span>
            </div>
          </div>
        </ULandingSection>
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
