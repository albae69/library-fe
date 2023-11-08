<script setup lang="ts">
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { Sidebar } from '@/components'
import { isAuthenticated } from '@/lib/utils'

const router = useRouter()

onMounted(() => {
  // if user has logged in, redirect to home
  if (!isAuthenticated()) {
    router.replace('/')
  }
})
</script>

<template>
  <div className="min-h-screen mx-auto justify-center items-center">
    <main class="max-w-screen-2xl mx-auto flex">
      <Sidebar class="hidden md:block"></Sidebar>
      <RouterView></RouterView>
    </main>
  </div>
</template>
