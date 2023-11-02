<script setup lang="ts">
import { Skeleton } from '@/components/ui/skeleton'
</script>

<template>
  <div
    class="h-[300px] w-full md:w-[300px] lg:w-[450px] border-2 rounded-lg p-4 space-y-2 mb-4">
    <Skeleton class="h-4 w-[200px]" />
    <Skeleton class="h-4 w-[150px]" />
    <Skeleton class="h-4 w-[150px]" />
    <Skeleton class="h-[190px] w-full" />
  </div>
</template>
