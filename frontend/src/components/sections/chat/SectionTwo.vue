<template>
  <div class="flex flex-col h-[90vh] w-full">
    <div v-if="!chatStore.error" class="flex-grow overflow-auto p-4 ">
      <div v-if="!chatStore.finished">
        <div v-for="(message, index) in chatStore.messages" :key="index" class="mb-4 border-b-2">
          <div class="bg-green-200 p-2 rounded-lg text-right">
            {{ message.answer }}
          </div>
          <div v-if="message.question" class="bg-blue-200 p-2 rounded-lg text-left mt-2">
            {{ message.question }}
          </div>
        </div>
        <div v-if="chatStore.typing" class="mb-4 border-b-2">
          <div class="bg-blue-200 p-2 rounded-lg text-left">
            يكتب...
          </div>
        </div>
      </div>
      <div v-else>
        <div class="p-4 rounded-lg text-center">
          <img src="/logo.png" alt="Logo" class="mx-auto mb-4 h-8 w-auto" />
          <h2 class="text-xl font-bold mb-2">ها هو تقييمك</h2>
          <p class="text-sm mb-4">هنا تفاصيل تقييمك:</p>
          <p class="mb-2">{{ chatStore.report.summary }}</p>
          <p class="mb-2">{{ chatStore.report.nextSteps }}</p>
          <p class="text-2xl font-bold">{{ chatStore.report.score }}</p>
        </div>
      </div>
    </div>
    <div class="p-4" v-if="!chatStore.finished && !chatStore.error">
      <InputsDefault 
        inputClass="w-full" 
        placeholder="اكتب النص هنا" 
        @inputQues="sendMessage"
      />
    </div>
    <div v-if="chatStore.error" class="p-4 flex justify-center">
      <ErrorComponent :error="chatStore.error" />
      <button @click="resetChat" class="mt-4 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
        Reset
      </button>
    </div>
  </div>
</template>

<script setup>

import { useChatStore } from '@/stores/chat';
import { useOnboardingStore } from '@/stores/onboarding/index'
import ErrorComponent from '@/components/errors/default.vue';

const onboarding = useOnboardingStore()
const chatStore = useChatStore();

const sendMessage = (message) => {
  chatStore.addAnswer(message,onboarding.age,onboarding.gender);
};

const resetChat = () => {
  chatStore.clearMessages();
  chatStore.error = null;
  chatStore.finished = false;
};

watch(() => chatStore.messages, () => {
  // Update the chatbox each new event
  
}, { deep: true });


watch(() => chatStore.error, (newVal, oldVal) => {
  if (newVal !== oldVal) {
    console.error('An error occurred:', newVal);
  }
});

</script>

<style scoped>
</style>
