<template>
<NuxtLayout>
<div class="flex flex-row">
  <SectionsChatSectionOne />
  <SectionsChatSectionTwo />
  <SectionsChatOnboarding v-if="!onboarding.registered" @register="onboarding.registerUser"/>

</div>

</NuxtLayout>
</template>

<script setup>
import { useOnboardingStore } from '@/stores/onboarding/index'

const onboarding = useOnboardingStore()
</script>
