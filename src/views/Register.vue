<script setup lang="ts">
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
</script>

<template>
  <section class="flex flex-1 h-screen w-full items-center justify-center">
    <Card class="w-[500px]">
      <CardHeader>
        <CardTitle>Register</CardTitle>
        <CardDescription>Register a new account.</CardDescription>
      </CardHeader>
      <CardContent>
        <Input name="name" type="text" placeholder="Name" class="mb-4" />
        <Input name="email" type="email" placeholder="Email" class="mb-4" />
        <Input name="password" type="password" placeholder="Password" />
      </CardContent>
      <CardFooter>
        <Button class="bg-black text-white w-full">Register</Button>
      </CardFooter>
    </Card>
  </section>
</template>
