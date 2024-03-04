<script setup lang="ts">
const feedRendered = ref(false);
declare const twttr: any;

onMounted(() => {
  const script = document.createElement("script");
  script.src = "https://platform.twitter.com/widgets.js";
  script.async = true;
  script.onload = () => {
    twttr.ready((twttr: any) => {
      twttr.widgets.load().then(() => {
        feedRendered.value = true;
      });
    });
  };
  document.body.appendChild(script);
});

defineProps({
  handle: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <ClientOnly>
    <div class="h-[380px] overflow-hidden" id="container">
      <a
        class="twitter-timeline"
        v-show="feedRendered"
        data-dnt="true"
        data-height="380"
        data-chrome="nofooter noborders noscrollbar noheader"
        :data-theme="$colorMode.preference"
        :href="`https://twitter.com/${handle}?ref_src=twsrc%5Etfw`"
      >
        <USkeleton class="h-[380px]" />
      </a>
      <USkeleton class="h-[380px]" v-show="!feedRendered" />
    </div>
  </ClientOnly>
</template>
