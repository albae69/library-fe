<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()
</script>

<template>
  <div class="min-h-screen w-full flex flex-col items-center justify-center">
    <h1 class="text-3xl font-bold text-red-500">Error 404</h1>
    <h3 class="text-base text-red-500 mb-10">Page Not Found</h3>
    <Button @click="router.back()">Go Back</Button>
  </div>
</template>
