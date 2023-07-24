<script setup lang="ts">
import type { WorkEntry } from '../../types/resume'
defineProps<{
    entry: WorkEntry
  }>();
</script>

<template>
  <div class="flex flex-col gap-y-1 mb-4">
    <div class="flex w-full justify-between">
      <p class="font-bold uppercase">{{ entry.companyName }}</p>
      <p class="font-bold">{{ entry.startDate }} - {{ entry.endDate }}</p>
    </div>
    <div class="flex w-full justify-between italic">
      <p>{{ entry.title }}{{ entry.isContract ? " (Contract)" : `` }}</p>
      <p>{{ entry.location }}</p>
    </div>
    <div class="mt-2 flex w-full justify-center">
      <ul class="list flex flex-col gap-y-2 list-disc list-outside max-w-3xl">
        <li
        class="list-item text-sm"
          v-for="desc in entry.description"
          :key="desc"
        >
          {{ desc }}
        </li>
      </ul>
    </div>
  </div>
</template>
