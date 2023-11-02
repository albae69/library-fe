<script setup lang="ts">
import { onMounted } from 'vue'

import { useBooksStore } from '@/store/books'
import { useUserStore } from '@/store/user'

import { storeToRefs } from 'pinia'
import { isAuthenticated } from '@/lib/utils'
import { getUser } from '@/service/user'
import { Button } from '@/components/ui/button'
import { Header } from '@/components'
import BookCard from '@/components/BookCard.vue'

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
    <div
      v-if="books.length"
      class="grid-cols-1 md:grid sm:grid-cols-2 md:grid-cols-3 max-w-screen-2xl mx-auto p-4">
      <div v-for="book in books">
        <BookCard :book="book" />
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
