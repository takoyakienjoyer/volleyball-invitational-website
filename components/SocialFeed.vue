<script setup lang="ts">
import { useIntersectionObserver } from "@vueuse/core";

type RefElement = Element | ComponentPublicInstance | null;

const showCards = ref(false);
const refs = ref<RefElement[]>([]);
const socialsSection = ref<any>(null);

const { stop } = useIntersectionObserver(
  socialsSection,
  ([{ isIntersecting }]) => {
    if (!isIntersecting) return;
    showCards.value = true;
    stop();
  },
  { threshold: 0.0005 },
);
</script>

<template>
  <UContainer class="-mb-16 -mt-32 lg:-mt-16 lg:-mt-48">
    <div ref="socialsSection">
      <ULandingSection icon="i-simple-icons-x" title="Social Feed">
        <div class="-mt-8 lg:-mt-16 lg:flex lg:justify-center" :ref="(element: any) => (refs[0] = element)">
          <ULandingCard class="mx-auto block text-center lg:mx-3" v-if="showCards" title="Lincoln-Way East Boys Volleyball Timeline" icon="i-ph-volleyball">
            <TwitterFeed handle="LWEBVBALL" />
          </ULandingCard>
          <ULandingCard class="mx-auto mt-6 block text-center lg:mx-3 lg:mt-0" v-if="showCards" title="Lincoln-Way East Athletics Timeline" icon="i-ph-football">
            <TwitterFeed handle="LWEastAthletics" />
          </ULandingCard>
        </div>
      </ULandingSection>
    </div>
  </UContainer>
</template>
