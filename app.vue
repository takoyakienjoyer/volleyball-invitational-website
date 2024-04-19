<script setup lang="ts">
useHead({
  title: "East Volleyball Invitational",
  meta: [
    {
      name: "Lincoln-Way East Volleyball Invitational",
      content: "Welcome to the Lincoln-Way East Boys' Volleyball Invitational",
    },
  ],
});
</script>

<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<style lang="scss">
section {
  scroll-margin-top: 6rem;
}

.layout-enter-active,
.layout-leave-active {
  transition: all 0.25s;
}
.layout-enter-from,
.layout-leave-to {
  opacity: 0;
  filter: blur(1rem);
  transform: translate(0, 1rem);
}

.page-enter-active,
.page-leave-active {
  transition: all 0.25s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
  transform: translate(0, 1rem);
}
</style>
