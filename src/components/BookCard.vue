<script setup lang="ts">
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Book } from '@/types'

interface Props {
  book: Book
}

const props = defineProps<Props>()
</script>

<template>
  <Card class="w-full shadow-l">
    <div v-if="props.book.image != null">
      <img
        :src="props.book.image"
        alt="card image"
        class="object-contain rounded" />
    </div>
    <CardHeader>
      <CardTitle class="line-clamp-1">{{ props.book.title }}</CardTitle>
      <CardDescription>By: {{ props.book.author }}</CardDescription>
      <CardDescription>IDR{{ props.book.price }}</CardDescription>
    </CardHeader>
  </Card>
</template>
