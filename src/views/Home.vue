<script setup lang="ts">
import { onMounted } from 'vue'

import { useBooksStore } from '@/store/books'
import { useUserStore } from '@/store/user'

import { storeToRefs } from 'pinia'
import { isAuthenticated } from '@/lib/utils'
import { getUser } from '@/service/user'
import { Button } from '@/components/ui/button'
import { Header } from '@/components'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

// stores
const booksStore = useBooksStore()
const { books } = storeToRefs(booksStore)

const userStore = useUserStore()

const init = async () => {
  try {
    const response = await getUser()
    if (response.success) {
      userStore.saveUser(response.data)
    }
  } catch (error) {
    console.log('error while init', error)
  }
}

const logout = () => {
  localStorage.removeItem('token')
}

onMounted(() => {
  booksStore.getAllBooks()

  if (isAuthenticated()) {
    init()
  }
})
</script>

<template>
  <section className="min-h-screen mx-auto justify-center items-center">
    <!-- Header -->
    <Header />
    <!-- Header -->

    <!-- List Books -->
    <div v-if="books.length" class="">
      <div v-for="book in books" class="px-4 max-w-screen-2xl mx-auto my-4">
        <Card class="w-full shadow-lg mb-4">
          <CardHeader>
            <CardTitle>{{ book.title }}</CardTitle>
            <CardDescription>{{ book.author }}</CardDescription>
          </CardHeader>
          <!-- <CardContent> {{ book. }} </CardContent> -->
          <CardFooter> {{ book.price }} </CardFooter>
        </Card>
      </div>
    </div>

    <div v-else class="text-center pt-4">
      <p v-if="books.length == 0">No Books.</p>
      <p v-else>loading...</p>
    </div>

    <div v-if="isAuthenticated()">
      <Button @click="logout">Logout</Button>
    </div>
    <!-- List Books -->
  </section>
</template>
