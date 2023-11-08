<script setup lang="ts">
import { Ref } from 'vue'

interface Props {
  title: string
  count: Ref<number>
}

const props = defineProps<Props>()
</script>

<template>
  <div
    class="h-[150px] p-4 flex flex-col justify-between rounded shadow mb-4 hover:-translate-y-1 hover:cursor-pointer">
    <p class="font-regular text-base text-slate-500">{{ props.title }}</p>
    <h1 class="flex justify-end font-bold text-6xl text-black">
      {{ props.count }}
    </h1>
  </div>
</template>
