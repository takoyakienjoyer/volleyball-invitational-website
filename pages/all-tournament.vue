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

const team = ref(<any[]>[]);

try {
  const response = await $fetch("/api/all-tournament");
  team.value = response;

  team.value.forEach((player) => {
    if (player.mvp) {
      player.name = `${player.name} (MVP)`;
    }
  });
} catch (error: any) {
  console.error(error);
}
</script>

<template>
  <UMain>
    <UContainer class="my-8">
      <h1 class="mb-8 text-center text-3xl font-bold">All-Tournament Team</h1>
      <ULandingCard>
        <UTable class="-mx-6 -mb-6 -mt-10" :rows="team" :columns="columns" />
      </ULandingCard>
    </UContainer>
  </UMain>
</template>
