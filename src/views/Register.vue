<script setup lang="ts">
import { useToast } from 'vue-toastification'
import { useRouter } from 'vue-router'
import { ref } from 'vue'

// local files
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
import { Loader2 } from 'lucide-vue-next'

const router = useRouter()

const name = ref('')
const email = ref('')
const password = ref('')
const isLoading = ref(false)

const toast = useToast()

const handleSubmit = async (e: Event) => {
  e.preventDefault()
  isLoading.value = true

  try {
    const response = await register({
      name: name.value,
      email: email.value,
      password: password.value,
      isAdmin: false,
    })
    if (response.success) {
      isLoading.value = false
      toast.success(response?.message)
      router.replace('/login')
    }
  } catch (error: any) {
    toast.error(error?.response?.data?.message)
    isLoading.value = false
  }
}
</script>

<template>
  <section class="flex flex-1 h-screen w-full items-center justify-center p-4">
    <form @submit="handleSubmit">
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
          <Button
            class="bg-black text-white w-full"
            type="submit"
            :disabled="isLoading">
            <Loader2 v-if="isLoading" class="mr-2 h-4 w-4 animate-spin" />
            Register</Button
          >
        </CardFooter>
      </Card>
    </form>
  </section>
</template>
