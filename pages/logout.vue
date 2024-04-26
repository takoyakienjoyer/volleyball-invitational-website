<script setup lang="ts">
try {
  await $fetch("/api/auth/logout", {
    method: "POST",
  });
} catch (error: any) {
  console.error(error);
}

onMounted(() => {
  navigateTo("/");
});
</script>

<template>
  <div></div>
</template>
