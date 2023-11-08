<script setup lang="ts">
import { onMounted, ref } from 'vue'

import { OverViewCard } from '@/components'

import { isAuthenticated } from '@/lib/utils'
import { useBooksStore } from '@/store/books'
import { useUserStore } from '@/store/user'
import { useOrderStore } from '@/store/order'
import { usePaymentStore } from '@/store/payment'

// store
const bookStore = useBooksStore()
const userStore = useUserStore()
const orderStore = useOrderStore()
const paymentStore = usePaymentStore()

// ref
let bookCount = ref(0)
let userCount = ref(0)
let orderCount = ref(0)
let paymentCount = ref(0)

const data = [
  { title: 'Book', count: bookCount },
  {
    title: 'User',
    count: userCount,
  },
  { title: 'Order History', count: orderCount },
  { title: 'Payment History', count: paymentCount },
]

const init = async () => {
  const [books, users, orders, payments] = await Promise.all([
    bookStore.getAllBooks(),
    userStore.fetchUser(),
    orderStore.fetchAllOrder(),
    paymentStore.fetchAllPayment(),
  ])

  bookCount.value = books?.length!
  userCount.value = users?.length!
  orderCount.value = orders?.length!
  paymentCount.value = payments?.length!
}

onMounted(() => {
  if (isAuthenticated()) {
    init()
  }
})
</script>

<template>
  <section class="w-full p-4">
    <div class="flex flex-col w-full md:grid md:grid-cols-4 gap-4">
      <OverViewCard
        v-for="d in data"
        :key="d.title"
        :title="d.title"
        :count="d.count" />
    </div>
  </section>
</template>
