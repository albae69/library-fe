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
  <section className="min-h-screen mx-auto justify-center items-center">
    <!-- Header -->
    <Header />
    <!-- Header -->

    <!-- List Books -->
    <div v-if="status == 'loading'">
      <div
        class="grid-cols-1 md:grid sm:grid-cols-2 md:grid-cols-3 max-w-screen-2xl mx-auto p-4">
        <BookCardSkeleton />
        <BookCardSkeleton />
        <BookCardSkeleton />
      </div>
    </div>
    <div v-else>
      <div
        v-if="books.length"
        class="grid-cols-1 md:grid sm:grid-cols-2 md:grid-cols-3 max-w-screen-2xl mx-auto p-4">
        <div v-for="book in books">
          <BookCard :book="book" />
        </div>
      </div>
      <div v-else class="flex flex-1 items-center justify-center h-[500px]">
        <p class="text-center text-base">No Books Available</p>
      </div>
    </div>
    <!-- List Books -->
  </section>
</template>
