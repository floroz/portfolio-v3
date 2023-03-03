<script setup lang="ts">
  import BaseFooter from "~~/components/organisms/base-footer.vue";
  import BaseHeader from "~~/components/organisms/base-header.vue";
</script>

<template>
  <div class="h-auto sm:min-h-screen">
    <BaseHeader />
    <main>
      <slot />
    </main>
    <BaseFooter />
  </div>
</template>
