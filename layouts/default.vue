<script setup lang="ts">
  import BaseFooter from "~~/components/organisms/base-footer.vue";
  import BaseHeader from "~~/components/organisms/base-header.vue";
</script>

<template>
  <div class="flex h-auto flex-col justify-start sm:min-h-screen">
    <BaseHeader />
    <main class="grow">
      <slot />
    </main>
    <BaseFooter />
  </div>
</template>
