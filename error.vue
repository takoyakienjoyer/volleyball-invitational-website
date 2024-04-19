<script setup lang="ts">
import type { NuxtError } from "#app";

defineProps<{
  error: NuxtError;
}>();
</script>

<template>
  <AppHeader />

  <UContainer>
    <UPage>
      <UPageError :error="error" />
    </UPage>
  </UContainer>
</template>
