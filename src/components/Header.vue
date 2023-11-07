<script setup lang="ts">
import { useRouter } from 'vue-router'

import { Button } from '@/components/ui/button'
import { isAuthenticated } from '@/lib/utils'

const router = useRouter()

const onLogout = () => {
  localStorage.clear()
  router.replace('/')
  window.location.reload()
}
</script>

<template>
  <header class="shadow-sm sticky top-0 z-10 backdrop-blur w-full h-[80px]">
    <nav
      className="max-w-screen-2xl mx-auto h-[80px] flex flex-row items-center justify-between px-10">
      <h1 class="font-bold text-base lg:text-2xl">Library System Management</h1>
      <div v-if="!isAuthenticated()">
        <Button
          class="bg-black text-white w-[100px]"
          @click="router.push('/login')"
          >Login</Button
        >
      </div>
      <div v-else class="hidden items-center md:flex">
        <p class="mr-4 hover:cursor-pointer" @click="router.push('/dashboard')">
          Dashboard
        </p>
        <Button class="bg-black text-white w-[100px]" @click="onLogout"
          >Logout</Button
        >
      </div>
    </nav>
  </header>
</template>
