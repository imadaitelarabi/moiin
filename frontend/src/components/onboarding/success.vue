<template>
    <div class="p-4 flex flex-col items-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="h-12 w-12 text-green-500">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
        </svg>
        <p class="text-2xl font-bold mb-2 text-center">يمكنك الدردشة الآن</p>
        <button @click="$emit('register')" class="mt-4 px-4 py-2 gradient-bg text-white rounded" >ابدأ الدردشة</button>
    </div>
</template>