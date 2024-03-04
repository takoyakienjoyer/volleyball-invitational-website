<script setup lang="ts">
const team1 = [
  {
    number: 1,
    name: "...",
    position: "...",
    school: "...",
  },
  {
    number: 1,
    name: "...",
    position: "...",
    school: "...",
  },
  {
    number: 1,
    name: "...",
    position: "...",
    school: "...",
  },
  {
    number: 1,
    name: "...",
    position: "...",
    school: "...",
  },
  {
    number: 1,
    name: "...",
    position: "...",
    school: "...",
  },
  {
    number: 1,
    name: "...",
    position: "...",
    school: "...",
  },
  {
    number: 1,
    name: "...",
    position: "...",
    school: "...",
  },
  {
    number: 1,
    name: "...",
    position: "...",
    school: "...",
  },
  {
    number: 1,
    name: "...",
    position: "...",
    school: "...",
  },
  {
    number: 1,
    name: "...",
    position: "...",
    school: "...",
  },
  {
    number: 1,
    name: "...",
    position: "...",
    school: "...",
  },
  {
    number: 1,
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
      <UTable class="-mb-4 -mt-8" :rows="team1" />
    </ULandingCard>
  </UContainer>
</template>
