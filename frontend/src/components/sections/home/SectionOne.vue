<template>
  <section class="flex flex-col items-center">
    <h1 class="text-2xl font-bold mb-2">ماذا تشعر؟</h1>
    <h2 class="text-xl mb-4"> كل المعلومات  محمية و خاصة</h2>
    <InputsDefault class="w-1/2" placeholder="أدخل النص هنا"  @inputQues="handleInput" />
  </section>
</template>

<script setup>

import { useChatStore } from '@/stores/chat';

const chatStore = useChatStore();

const handleInput = (value) => {
  // Add your function logic here

  chatStore.firstFelling = value;
  chatStore.addAnswer(value);
  navigateTo('/chat');
}
</script>

<style scoped>
section {
  @apply bg-white;
}
</style>
