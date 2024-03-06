<template>
    <div class="relative">
      <div class="block appearance-none w-full bg-white border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500 text-right" @click="showOptions = !showOptions">
        {{ selectedOption ? selectedOption.text : 'اختر خيارًا' }}
        <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
          <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 12l-6-6h12"/></svg>
        </div>
      </div>
      <div class="absolute w-full mt-2 bg-white rounded-lg shadow-lg z-50" v-show="showOptions">
        <div class="py-1" v-for="option in options" :key="option.value" @click="selectOption(option)">
          {{ option.text }}
        </div>
      </div>
    </div>
</template>

<script>

export default {
  props: {
    options: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      selectedOption: null,
      showOptions: false
    }
  },
  methods: {
    selectOption(option) {
      this.selectedOption = option;
      this.showOptions = false;
      this.$emit('optionValue', this.selectedOption.value);

    }
  }
}
</script>