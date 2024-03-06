<template>
  <div class="flex flex-col h-[100vh]">
    <LayoutHeader />
    <main class="flex-grow">
      <slot />
    </main>
    <LayoutFooter />
  </div>
</template>



<style scoped>
.main {
  @apply flex-grow;
}
</style>
