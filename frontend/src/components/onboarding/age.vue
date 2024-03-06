<template>

    <div class="p-4 flex flex-col ">
        <h1 class="text-2xl font-bold mb-2 text-right">اختر العمر</h1>
        <h2 class="text-xl mb-4 text-right">يرجى تحديد الفئة العمرية التي تنتمي إليها</h2>
        <SelectsDefault :options="ages" @optionValue="setAge" />
        <button @click="nextStep" class="mt-4 px-4 py-2 gradient-bg text-white rounded">التالي</button>
    </div>

</template>

<script>
import { useOnboardingStore } from '@/stores/onboarding/index'
const onboarding = useOnboardingStore();
export default {

data() {
return {
  ages: [
    { value: '13-18', text: '13-18' },
    { value: '19-24', text: '19-24' },
    { value: '25-30', text: '25-30' },
    { value: '31-36', text: '31-36' },
    { value: '37-42', text: '37-42' },
    { value: '43-48', text: '43-48' },
    { value: '49-54', text: '49-54' },
    { value: '55-60', text: '55-60' }
  ]
}
},
methods: {
nextStep() {
  this.$emit('nextStep');
},

setAge(age) {
  onboarding.age = age;
}

}
}
</script>