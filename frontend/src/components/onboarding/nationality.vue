<template>

        <div class="p-4">
            <h1 class="text-2xl font-bold mb-2">Title</h1>
            <h2 class="text-xl mb-4">Subtitle</h2>
            <SelectsDefault :options="nationalities" />
            <button @click="nextStep" class="mt-4 px-4 py-2 bg-blue-500 text-white rounded">Next</button>
        </div>

</template>

<script>

export default {

  data() {
    return {
      nationalities: [
        { value: 'AE', text: 'United Arab Emirates' },
        { value: 'BH', text: 'Bahrain' },
        { value: 'DZ', text: 'Algeria' },
        { value: 'EG', text: 'Egypt' },
        { value: 'IQ', text: 'Iraq' },
        { value: 'JO', text: 'Jordan' },
        { value: 'KW', text: 'Kuwait' },
        { value: 'LB', text: 'Lebanon' },
        { value: 'LY', text: 'Libya' },
        { value: 'MA', text: 'Morocco' },
        { value: 'OM', text: 'Oman' },
        { value: 'QA', text: 'Qatar' },
        { value: 'SA', text: 'Saudi Arabia' },
        { value: 'SY', text: 'Syria' },
        { value: 'TN', text: 'Tunisia' },
        { value: 'YE', text: 'Yemen' }
      ]
    }
  },
  methods: {
    nextStep() {
      this.$emit('nextStep');
    }
  }
}
</script>