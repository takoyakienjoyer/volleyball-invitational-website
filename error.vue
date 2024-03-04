<script setup lang="ts">
import type { NuxtError } from "#app";

defineProps<{
  error: NuxtError;
}>();
</script>

<template>
  <AppHeader />

  <UContainer>
    <UMain>
      <UPage>
        <UPageError :error="error" />
      </UPage>
    </UMain>
  </UContainer>
</template>
