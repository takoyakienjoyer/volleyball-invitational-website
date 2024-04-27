<script setup lang="ts">
onMounted(async () => {
  try {
    await $fetch("/api/auth/logout", {
      method: "POST",
    });
  } catch (error: any) {
    console.error(error);
  }

  navigateTo("/");
});
</script>

<template>
  <div></div>
</template>
