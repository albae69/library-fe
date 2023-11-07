<script setup lang="ts">
import { onMounted } from 'vue'
import { storeToRefs } from 'pinia'

import { useBooksStore } from '@/store/books'
import { Header, BookCard, BookCardSkeleton } from '@/components'

// stores
const booksStore = useBooksStore()
const { books, status } = storeToRefs(booksStore)

onMounted(() => {
  booksStore.getAllBooks()
})
</script>

<template>
  <main className="min-h-screen mx-auto justify-center items-center">
    <!-- Header -->
    <Header />
    <!-- Header -->

    <!-- List Books -->
    <div v-if="status == 'loading'">
      <div
        class="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-screen-2xl mx-auto p-4 gap-4">
        <BookCardSkeleton />
        <BookCardSkeleton />
        <BookCardSkeleton />
        <BookCardSkeleton />
      </div>
    </div>
    <div v-else>
      <div
        v-if="books.length"
        class="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-screen-2xl mx-auto p-4 gap-4">
        <div v-for="book in books">
          <BookCard :book="book" />
        </div>
      </div>
      <div v-else class="flex flex-1 items-center justify-center h-[500px]">
        <p class="text-center text-base">No Books Available</p>
      </div>
    </div>
    <!-- List Books -->
  </main>
</template>
