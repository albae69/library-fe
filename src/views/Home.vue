<script setup lang="ts">
import { onMounted } from 'vue'

import { useBooksStore } from '@/store/books'
import { storeToRefs } from 'pinia'

const booksStore = useBooksStore()
const { books } = storeToRefs(booksStore)

onMounted(() => {
  booksStore.getAllBooks()
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
</template>
