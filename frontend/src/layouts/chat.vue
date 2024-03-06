<template>
    <div class="flex flex-col min-h-screen">
      <LayoutHeader />
      <main class="">
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
  