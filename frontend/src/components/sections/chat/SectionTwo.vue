<template>
  <div class="flex flex-col h-[90vh] w-full">
    <div class="flex-grow overflow-auto p-4 ">
      <!-- Chat window goes here -->
    </div>
    <div class="p-4">
      <InputsDefault 
        inputClass="w-full" 
        placeholder="Type your message here..." 
        @input="sendMessage"
      />
    </div>
  </div>
</template>

<script setup>

const sendMessage = (message) => {
  // Handle sending of the message here
}
</script>
<style scoped>
</style>
