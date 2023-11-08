<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useToast } from 'vue-toastification'
import { Loader2 } from 'lucide-vue-next'

import { Input } from '@/components/ui/input'
import {
  Card,
  CardTitle,
  CardHeader,
  CardContent,
  CardFooter,
  CardDescription,
} from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { login } from '@/service/auth'
import { useRouter } from 'vue-router'
import { isAuthenticated } from '@/lib/utils'

const router = useRouter()

const email = ref('')
const password = ref('')
const isLoading = ref(false)

const toast = useToast()

const handleSubmit = async (e: Event) => {
  e.preventDefault()
  isLoading.value = true
  try {
    const response = await login({
      email: email.value,
      password: password.value,
    })
    if (response.success) {
      localStorage.setItem('token', response.data.token)
      toast.success(response?.message)
      isLoading.value = false
      router.replace('/')
    } else {
      isLoading.value = false
      toast.error(response?.message)
    }
  } catch (error: any) {
    isLoading.value = false
    toast.error(error?.response?.data?.message)
  }
}

onMounted(() => {
  // if user has logged in, redirect to home
  if (isAuthenticated()) {
    router.replace('/')
  }
})
</script>

<template>
  <section class="flex flex-1 h-screen w-full items-center justify-center p-4">
    <form @submit="handleSubmit">
      <Card class="w-[500px]">
        <CardHeader>
          <CardTitle>Login</CardTitle>
          <CardDescription>log in to your account.</CardDescription>
        </CardHeader>
        <CardContent>
          <Input
            name="email"
            v-model="email"
            type="email"
            placeholder="Email"
            class="mb-4"
            required />
          <Input
            name="password"
            v-model="password"
            type="password"
            placeholder="Password"
            required />
        </CardContent>
        <CardFooter>
          <Button
            class="bg-black text-white w-full flex items-center justify-center"
            type="submit"
            :disabled="isLoading">
            <Loader2 v-if="isLoading" class="mr-2 h-4 w-4 animate-spin" />
            Login
          </Button>
          <p class="p-2 text-center">
            doesn't have an account?
            <strong
              class="hover:cursor-pointer"
              @click="router.push('/register')"
              >Register</strong
            >
          </p>
        </CardFooter>
      </Card>
    </form>
  </section>
</template>
