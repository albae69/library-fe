<script setup lang="ts">
const links = [
  {
    to: '/dashboard/books',
    name: 'Book',
  },
  {
    to: '/dashboard/user',
    name: 'User',
  },
  {
    to: '/dashboard/order-history',
    name: 'Order History',
  },
  {
    to: '/dashboard/payment-history',
    name: 'Payment History',
  },
]
</script>

<template>
  <div class="w-[300px] border-r h-screen p-4">
    <RouterLink to="/dashboard">
      <h1 class="text-2xl font-bold mb-4">Dashboard</h1>
    </RouterLink>
    <RouterLink
      v-for="link in links"
      :to="link.to"
      class="grid mb-4 hover:underline">
      {{ link.name }}
    </RouterLink>
  </div>
</template>
