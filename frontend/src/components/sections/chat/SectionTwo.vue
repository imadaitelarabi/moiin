<template>
  <div class="flex flex-col h-[90vh] w-full">
    <div class="flex-grow overflow-auto p-4 ">
      <div v-if="!chatStore.finished">
        <div v-for="(message, index) in chatStore.messages" :key="index" class="mb-4 border-b-2">
          <div class="bg-green-200 p-2 rounded-lg text-right">
            {{ message.answer }}
          </div>
          <div v-if="message.question" class="bg-blue-200 p-2 rounded-lg text-left mt-2">
            {{ message.question }}
          </div>
        </div>
      </div>
      <div v-else>
        <div class="p-4 bg-yellow-200 rounded-lg">
          <h2>{{ chatStore.report.summary }}</h2>
          <p>{{ chatStore.report.nextSteps }}</p>
        </div>
      </div>
    </div>
    <div class="p-4" v-if="!chatStore.finished">
      <InputsDefault 
        inputClass="w-full" 
        placeholder="اكتب النص هنا" 
        @inputQues="sendMessage"
      />
    </div>
  </div>
</template>

<script setup>

import { useChatStore } from '@/stores/chat';

const chatStore = useChatStore();

const sendMessage = (message) => {
  chatStore.addAnswer(message);
};

watch(() => chatStore.messages, () => {
  // Update the chatbox each new event
  
}, { deep: true });
</script>

<style scoped>
</style>
