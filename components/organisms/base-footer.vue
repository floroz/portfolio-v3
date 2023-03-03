<script setup lang="ts">
  import SocialLinks from "~/components/molecules/social-links.vue";
</script>

<template>
  <footer class="header-styled border-t border-zinc-700 flex items-center">
    <div class="flex justify-between items-center w-full">
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
        <SocialLinks />
      </ul>
    </div>
  </footer>
</template>
