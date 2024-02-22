<script setup>
const mounted = ref(false);

const headerLinks = [
  {
    label: "Schedule and Results",
    icon: "i-heroicons-book-open",
    to: "/#info",
    active: false,
  },
  {
    label: "Meet the Teams",
    icon: "i-heroicons-square-3-stack-3d",
    to: "/#teams",
    active: false,
  },
  {
    label: "Past Tournaments",
    icon: "i-heroicons-chat-bubble-bottom-center-text",
    to: "/#tournaments",
    active: false,
  },
  {
    label: "Dashboard",
    icon: "i-heroicons-user",
    to: "/dashboard",
  },
];

onMounted(() => {
  mounted.value = true;
});
</script>

<template>
  <UHeader v-if="mounted" :links="headerLinks">
    <template #logo>
      <ULink class="text-base" to="/#landing">East Volleyball Invitational</ULink>
    </template>

    <template #right>
      <UTooltip :text="$colorMode.preference === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'">
        <UColorModeButton />
      </UTooltip>

      <UTooltip text="Follow us on X">
        <UButton to="https://twitter.com" icon="i-simple-icons-x" color="gray" variant="ghost" />
      </UTooltip>

      <UTooltip text="Follow us on Instagram">
        <UButton to="https://instagram.com" icon="i-simple-icons-instagram" color="gray" variant="ghost" />
      </UTooltip>
    </template>
  </UHeader>
  <UHeader v-else>
    <template #logo>
      <USkeleton class="h-8 w-52" />
    </template>

    <template #center>
      <USkeleton class="hidden h-8 w-24 lg:inline" v-for="(link, index) in headerLinks" :key="index" />
    </template>

    <template #right>
      <USkeleton class="h-8 w-8" />
      <USkeleton class="h-8 w-8" />
      <USkeleton class="h-8 w-8" />
    </template>
  </UHeader>
</template>
