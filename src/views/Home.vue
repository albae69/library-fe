<script setup lang="ts">
import { onMounted } from 'vue'

import { useBooksStore } from '@/store/books'
import { useUserStore } from '@/store/user'

import { storeToRefs } from 'pinia'
import { isAuthenticated } from '@/lib/utils'
import { getUser } from '@/service/user'
import { Button } from '@/components/ui/button'

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
  <div v-if="books.length">
    <div v-for="book in books">
      <p :key="book.id">{{ book.title }}</p>
    </div>
  </div>
  <div v-else>
    <p>No Books.</p>
  </div>

  <div v-if="isAuthenticated()">
    <Button @click="logout">Logout</Button>
  </div>
</template>
