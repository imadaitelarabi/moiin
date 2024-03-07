<template>
    <div class="flex flex-col relative">
      <div class="flex items-center rounded-full px-4 py-2 border-2 focus:border-blue-500 hover:border-green-500 transition-all duration-200 ease-in-out">
        <button 
          class="ml-2 gradient-bg text-white font-bold py-2 px-4 rounded"
          @click="emitInput(question)"
        >
          ابدأ
        </button>
        <input 
          class="flex-grow rounded-full pl-12 px-4 py-2"
          :class="inputClass"
          :placeholder="placeholder"
          style="direction: rtl;"
          v-model="question"
        />
      </div>
    </div>
  </template>
  <script>
  export default {
    props: {
      inputClass: {
        type: String,
        default: ''
      },
      placeholder: {
        type: String,
        default: 'أدخل النص هنا'
      },

    },
    data() {
      return {
        question: ''
      }
    },
    methods: {
      emitInput(question) {
        if (question.trim() !== '') {
          this.$emit('inputQues', question);
          this.question = "";
        }
      }
    }
  }
  </script>
  
  <style scoped>

  input{
    border: none;
    outline: none;
  }
  </style>