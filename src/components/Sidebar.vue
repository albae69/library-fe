<script setup lang="ts">
import { Button } from './ui/button'
</script>

<template>
  <div class="w-[250px] border h-screen p-4">
    <h1 class="text-2xl font-bold mb-4">Dasboard</h1>
    <div class="flex flex-col">
      <Button class="justify-start p-0">Book</Button>
      <Button class="justify-start p-0">User</Button>
      <Button class="justify-start p-0">Order History</Button>
      <Button class="justify-start p-0">Payment History</Button>
    </div>
  </div>
</template>
