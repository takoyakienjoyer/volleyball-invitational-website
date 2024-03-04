<script setup lang="ts">
import { useIntersectionObserver } from "@vueuse/core";

type RefElement = Element | ComponentPublicInstance | null;

const refs = ref<RefElement[]>([]);
const teamsSection = ref<any>(null);
const sectionTitle = ref<string>();

const { stop } = useIntersectionObserver(
  teamsSection,
  ([{ isIntersecting }]) => {
    if (!isIntersecting) return;

    refs.value.forEach((element: any) => {
      element.style.animationPlayState = "running";
    });

    stop();
  },
  { threshold: 0.1 },
);

onMounted(() => {
  sectionTitle.value = new Date().getFullYear() + " Teams";

  refs.value.forEach((element: any) => {
    element.style.animationFillMode = "forwards";
    element.style.transformOrigin = "center";
    element.style.animationPlayState = "paused";
    element.style.animationDuration = "1s";
  });
});
</script>

<template>
  <UContainer class="-mt-16">
    <section class="-scroll-m-[0.5rem] lg:-scroll-m-[2rem]" id="teams" ref="teamsSection">
      <div class="animate-bottom" :ref="(element) => (refs[0] = element)">
        <ULandingSection icon="i-heroicons-user-group" :title="sectionTitle">
          <div class="-mt-8 lg:-mt-16 lg:grid lg:grid-cols-5 lg:gap-4">
            <div class="flex flex-col items-center">
              <img class="h-[250px] object-contain lg:h-[180px]" src="~/assets/knight_clean__1_.png" />
              <span class="w-full text-center text-xl font-bold lg:text-base">Lincoln-Way Central</span>
            </div>
            <div class="flex flex-col items-center">
              <img class="h-[250px] object-contain lg:h-[180px]" src="~/assets/knight_clean__1_.png" />
              <span class="w-full text-center text-xl font-bold lg:text-base">Lincoln-Way Central</span>
            </div>
            <div class="flex flex-col items-center">
              <img class="h-[250px] object-contain lg:h-[180px]" src="~/assets/knight_clean__1_.png" />
              <span class="w-full text-center text-xl font-bold lg:text-base">Lincoln-Way Central</span>
            </div>
            <div class="flex flex-col items-center">
              <img class="h-[250px] object-contain lg:h-[180px]" src="~/assets/knight_clean__1_.png" />
              <span class="w-full text-center text-xl font-bold lg:text-base">Lincoln-Way Central</span>
            </div>
            <div class="flex flex-col items-center">
              <img class="h-[250px] object-contain lg:h-[180px]" src="~/assets/knight_clean__1_.png" />
              <span class="w-full text-center text-xl font-bold lg:text-base">Lincoln-Way Central</span>
            </div>
            <div class="flex flex-col items-center">
              <img class="h-[250px] object-contain lg:h-[180px]" src="~/assets/knight_clean__1_.png" />
              <span class="w-full text-center text-xl font-bold lg:text-base">Lincoln-Way Central</span>
            </div>
            <div class="flex flex-col items-center">
              <img class="h-[250px] object-contain lg:h-[180px]" src="~/assets/knight_clean__1_.png" />
              <span class="w-full text-center text-xl font-bold lg:text-base">Lincoln-Way Central</span>
            </div>
            <div class="flex flex-col items-center">
              <img class="h-[250px] object-contain lg:h-[180px]" src="~/assets/knight_clean__1_.png" />
              <span class="w-full text-center text-xl font-bold lg:text-base">Lincoln-Way Central</span>
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
