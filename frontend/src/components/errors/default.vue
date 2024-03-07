<template>
    <div class="flex flex-col items-center justify-center">
        <img src="/logo.png" alt="Logo" class="mb-4 h-8 w-auto">
        <h1 class="text-2xl font-bold mb-2">Opps</h1>
        <h2 class="text-xl mb-4">{{ error }}</h2>
    </div>
</template>

<script>
export default {
  props: {
    error: {
      type: String,
      required: true
    }
  }
}
</script>