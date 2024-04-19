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
    label: "All Tournament",
    icon: "i-heroicons-star",
    to: "/dashboard/all-tournament",
  },
  {
    label: "Home Links",
    icon: "i-heroicons-globe-alt",
    to: "/dashboard/home-links",
  },
  {
    label: "User Accounts",
    icon: "i-heroicons-user",
    to: "/dashboard/user-accounts",
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
  },
];
</script>

<template>
  <UDashboardLayout>
    <UDashboardPanel :width="300" collapsible>
      <UDashboardNavbar />

      <UDashboardSidebar>
        <UDashboardSidebarLinks :links="sidebarLinks" />
      </UDashboardSidebar>
    </UDashboardPanel>

    <slot></slot>
  </UDashboardLayout>
</template>
