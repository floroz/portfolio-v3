<script setup lang="ts">
  import type { WorkEntry } from "../../types/resume";
  defineProps<{
    entry: WorkEntry;
  }>();
</script>

<template>
  <div class="mb-2 flex flex-col">
    <div class="flex w-full justify-between">
      <p class="text-sm font-bold uppercase">{{ entry.companyName }}</p>
      <p class="font-bold">{{ entry.startDate }} - {{ entry.endDate }}</p>
    </div>
    <div class="flex w-full justify-between text-sm italic">
      <p>{{ entry.title }}{{ entry.isContract ? " (Contract)" : `` }}</p>
      <p>{{ entry.location }}</p>
    </div>
    <div class="mt-2 flex w-full justify-center">
      <ul class="flex max-w-3xl list-outside list-disc flex-col gap-y-2">
        <!-- Albeit unsafely injected - the text content injected in this `<li>` is hard-coded within this repository, and therefore there is concrete risk of XSS -->
        <li
          v-for="desc in entry.description"
          :key="desc"
          class="list-item text-xs"
          v-html="desc"
        />
      </ul>
    </div>
  </div>
</template>
