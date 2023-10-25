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
import { register } from '@/service/auth'
import { useRouter } from 'vue-router'

const router = useRouter()

const name = ref('')
const email = ref('')
const password = ref('')

const toast = useToast()

const onRegister = async () => {
  try {
    const response = await register({
      name: name.value,
      email: email.value,
      password: password.value,
      isAdmin: false,
    })
    if (response.success) {
      toast.success(response?.message)
      router.replace('/login')
    }
  } catch (error: any) {
    toast.error(error?.response?.data?.message)
  }
}
</script>

<template>
  <section class="flex flex-1 h-screen w-full items-center justify-center">
    <Card class="w-[500px]">
      <CardHeader>
        <CardTitle>Register</CardTitle>
        <CardDescription>Register a new account.</CardDescription>
      </CardHeader>
      <CardContent>
        <Input
          name="name"
          v-model="name"
          type="text"
          placeholder="Name"
          class="mb-4" />
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
        <Button class="bg-black text-white w-full" @click="onRegister"
          >Register</Button
        >
      </CardFooter>
    </Card>
  </section>
</template>
