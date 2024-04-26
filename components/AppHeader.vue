<script setup>
const mounted = ref(false);

const headerLinks = [
  {
    label: "Schedule and Results",
    icon: "i-heroicons-clipboard-document-list",
    children: [
      {
        label: "Schedule",
        to: "https://www.gobound.com/host/lwevb/tournaments/R600/divisions/D2/schedule",
        icon: "i-heroicons-calendar",
        description: "View the schedule for the tournament",
        target: "_blank",
      },
      {
        label: "Pool Play",
        to: "https://www.gobound.com/host/lwevb/tournaments/R600/divisions/D2/standings",
        icon: "i-heroicons-document-chart-bar",
        description: "View the pool play results and standings",
        target: "_blank",
      },
      {
        label: "Bracket Play",
        to: "https://www.gobound.com/host/lwevb/tournaments/R600/divisions/D2/brackets",
        icon: "i-heroicons-trophy",
        description: "View the bracket play results and standings",
        target: "_blank",
      },
    ],
    active: false,
  },
  {
    label: "Meet the Teams",
    icon: "i-heroicons-user-group",
    to: "/team-profiles",
    active: false,
  },
  {
    label: "Past Tournaments",
    icon: "i-ph-trophy",
    to: "/past-tournaments",
    active: false,
  },
  {
    label: "Dashboard",
    icon: "i-heroicons-user",
    to: "/dashboard",
    active: false,
  },
];

onMounted(() => {
  mounted.value = true;
});
</script>

<template>
  <UHeader v-if="mounted" :links="headerLinks">
    <template #logo>
      <ULink class="text-base" to="/#landing">LWE Volleyball Invitational</ULink>
    </template>

    <template #right>
      <UTooltip :text="$colorMode.preference === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'">
        <UColorModeButton />
      </UTooltip>

      <UTooltip text="Follow us on X">
        <UButton to="https://twitter.com/LWEBVBALL" icon="i-simple-icons-x" color="gray" variant="ghost" />
      </UTooltip>
    </template>

    <template #panel>
      <UNavigationTree :links="headerLinks" default-open :multiple="false" />
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
    </template>
  </UHeader>
</template>
