<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useToast } from 'vue-toastification'

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

const onLogin = async () => {
  try {
    const response = await login({
      email: email.value,
      password: password.value,
    })
    if (response.success) {
      localStorage.setItem('token', response.data.token)
      toast.success(response?.message)
      router.replace('/')
    }
  } catch (error: any) {
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
  <section class="flex flex-1 h-screen w-full items-center justify-center">
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
          class="mb-4" />
        <Input
          name="password"
          v-model="password"
          type="password"
          placeholder="Password" />
      </CardContent>
      <CardFooter>
        <Button class="bg-black text-white w-full" @click="onLogin">{{
          isLoading ? 'loading..' : 'Login'
        }}</Button>
      </CardFooter>
    </Card>
  </section>
</template>
