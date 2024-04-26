<template>
  <div>
    <AppHeader />

    <div>
      <slot></slot>
    </div>

    <UDivider class="mt-6" icon="i-simple-icons-nuxtdotjs" />

    <AppFooter />

    <UNotifications />
  </div>
</template>
