<script setup lang="ts">
  import type { WorkEntry } from "../../types/resume";
  defineProps<{
    entry: WorkEntry;
  }>();
</script>

<template>
  <div class="mb-4 flex flex-col gap-y-1">
    <div class="flex w-full justify-between">
      <p class="font-bold uppercase">{{ entry.companyName }}</p>
      <p class="font-bold">{{ entry.startDate }} - {{ entry.endDate }}</p>
    </div>
    <div class="flex w-full justify-between italic">
      <p>{{ entry.title }}{{ entry.isContract ? " (Contract)" : `` }}</p>
      <p>{{ entry.location }}</p>
    </div>
    <div class="mt-2 flex w-full justify-center">
      <ul class="flex max-w-3xl list-outside list-disc flex-col gap-y-2">
        <li
          v-for="desc in entry.description"
          :key="desc"
          class="list-item text-sm"
        >
          {{ desc }}
        </li>
      </ul>
    </div>
  </div>
</template>
