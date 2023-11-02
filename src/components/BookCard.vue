<script setup lang="ts">
import {
  Card,
  CardContent,
  // CardContent,
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
  <Card class="w-full md:w-[300px] lg:w-[450px] shadow-l mb-4">
    <CardHeader>
      <CardTitle>{{ props.book.title }}</CardTitle>
      <CardDescription>{{ props.book.author }}</CardDescription>
      <CardDescription>{{ props.book.price }}</CardDescription>
    </CardHeader>
    <CardContent>
      <div v-if="props.book.image != null">
        <img
          :src="props.book.image"
          alt="card image"
          class="object-contain rounded-lg" />
      </div>
    </CardContent>
  </Card>
</template>
