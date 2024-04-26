<script setup lang="ts">
const sidebarLinks = [
  {
    label: "Dashboard",
    icon: "i-heroicons-home",
    to: "/dashboard",
  },
  {
    label: "Team Profiles",
    icon: "i-heroicons-user-group",
    to: "/dashboard/team-profiles",
  },
  {
    label: "Past Tournaments",
    icon: "i-heroicons-trophy",
    to: "/dashboard/past-tournaments",
  },
  {
    label: "All-Tournament",
    icon: "i-heroicons-star",
    to: "/dashboard/all-tournament",
  },
  {
    label: "Home Links",
    icon: "i-heroicons-globe-alt",
    to: "/dashboard/home-links",
  },
  {
    label: "Sponsors",
    icon: "i-heroicons-cube-transparent",
    to: "/dashboard/sponsors",
  },
  {
    label: "Settings",
    icon: "i-heroicons-cog-6-tooth",
    to: "/dashboard/settings",
    children: [
      {
        label: "General",
        icon: "i-heroicons-lock-closed",
        to: "/dashboard/settings",
      },
      {
        label: "Logout",
        icon: "i-heroicons-arrow-left-start-on-rectangle",
        to: "/logout",
      },
    ],
  },
];
</script>

<template>
  <UDashboardLayout>
    <UDashboardPanel :width="300" collapsible>
      <UDashboardNavbar>
        <template #left>
          <ULink class="text-base font-bold" to="/#landing">LWE Volleyball Invitational</ULink>
        </template>
      </UDashboardNavbar>

      <UDashboardSidebar>
        <UDashboardSidebarLinks :links="sidebarLinks" />
      </UDashboardSidebar>
    </UDashboardPanel>

    <slot></slot>

    <UNotifications />
  </UDashboardLayout>
</template>
