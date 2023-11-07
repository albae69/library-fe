<script setup lang="ts">
import { Skeleton } from '@/components/ui/skeleton'
</script>

<template>
  <div class="h-[300px] w-full border-2 rounded-lg p-4 space-y-2">
    <Skeleton class="h-[190px] w-full" />
    <Skeleton class="h-4 w-[200px]" />
    <Skeleton class="h-4 w-[150px]" />
    <Skeleton class="h-4 w-[150px]" />
  </div>
</template>
