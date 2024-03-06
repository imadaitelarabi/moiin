<template>

    <div class="p-4 flex flex-col ">
        <h1 class="text-2xl font-bold mb-2 text-right">اختر الجنس</h1>
        <h2 class="text-xl mb-4 text-right">يرجى تحديد الجنس الذي تتبعه</h2>
        <SelectsDefault :options="genders" @optionValue="setGender" />
        <button @click="nextStep" class="mt-4 px-4 py-2 gradient-bg text-white rounded">التالي</button>
    </div>

</template>

<script>
import { useOnboardingStore } from '@/stores/onboarding/index'
const onboarding = useOnboardingStore();

export default {

data() {
return {
  genders: [
    { value: 'male', text: 'ذكر' },
    { value: 'female', text: 'أنثى' },

  ]
}
},
methods: {
nextStep() {
    console.log('Kig')
  this.$emit('nextStep');
},

setGender(gender) {
  onboarding.gender = gender;
}

}
}
</script>