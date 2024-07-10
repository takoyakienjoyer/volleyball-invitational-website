<template>
  <div>
    <AppHeader />

    <div>
      <slot></slot>
    </div>

    <UDivider class="mt-6" icon="i-simple-icons-nuxtdotjs" />

    <UNotifications />
  </div>
</template>
