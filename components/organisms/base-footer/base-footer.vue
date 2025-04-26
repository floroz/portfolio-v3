<script setup lang="ts">
  import SocialLinks from "~/components/molecules/social-links/social-links.vue";
</script>

<template>
  <footer
    class="header-styled max-page-width flex items-center border-t border-zinc-700"
  >
    <div class="flex w-full items-center justify-between">
      <div class="text-primary">
        <p>
          © 2023 All rights reserved.
          <span class="hidden sm:inline-block"
            >Design by
            <NuxtLink
              to="https://dribbble.com/Kawsarvy"
              class="underline"
              >Kawsar Ahmed</NuxtLink
            ></span
          >
        </p>
      </div>
      <ul class="flex items-center gap-x-6">
        <SocialLinks :animate="false" />
      </ul>
    </div>
  </footer>
</template>
