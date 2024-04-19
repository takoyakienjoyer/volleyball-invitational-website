<script setup lang="ts">
const columns = [
  {
    key: "number",
    label: "#",
    align: "center",
  },
  {
    key: "name",
    label: "Name",
  },
  {
    key: "position",
    label: "Position",
  },
  {
    key: "school",
    label: "School",
  },
];

const team = [
  {
    number: "1",
    name: "...",
    position: "...",
    school: "...",
    class: "bg-blue-500/25 dark:bg-blue-400/25",
  },
  {
    number: "1",
    name: "...",
    position: "...",
    school: "...",
  },
  {
    number: "1",
    name: "...",
    position: "...",
    school: "...",
  },
  {
    number: "1",
    name: "...",
    position: "...",
    school: "...",
  },
  {
    number: "1",
    name: "...",
    position: "...",
    school: "...",
  },
  {
    number: "1",
    name: "...",
    position: "...",
    school: "...",
  },
  {
    number: "1",
    name: "...",
    position: "...",
    school: "...",
  },
  {
    number: "1",
    name: "...",
    position: "...",
    school: "...",
  },
  {
    number: "1",
    name: "...",
    position: "...",
    school: "...",
  },
  {
    number: "1",
    name: "...",
    position: "...",
    school: "...",
  },
  {
    number: "1",
    name: "...",
    position: "...",
    school: "...",
  },
  {
    number: "1",
    name: "...",
    position: "...",
    school: "...",
  },
];
</script>

<template>
  <UContainer class="my-8">
    <h1 class="mb-8 text-center text-3xl font-bold">All Tournament Team</h1>
    <ULandingCard>
      <UTable class="-mx-6 -mb-6 -mt-10" :rows="team" :columns="columns" />
    </ULandingCard>
  </UContainer>
</template>
