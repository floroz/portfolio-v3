<script setup lang="ts">
  import BaseButtonLink from "~~/components/atoms/base-button-link/base-button-link.vue";
</script>

<template>
  <!-- Spacer Div -->
  <div class="h-16 w-full md:h-32" />
  <section class="max-page-width m-auto flex flex-col items-center gap-y-8 p-4">
    <!-- Avatar -->
    <!-- Current Issue in using this plugin in production: https://github.com/nuxt/image/issues/689#issuecomment-1455065750 -->
    <!-- <NuxtImg
      preload
      src="/images/profilepic.jpeg"
      width="180"
      height="180"
      class="rounded-full"
    /> -->
    <div class="w-36 overflow-hidden rounded-full">
      <img
        src="/images/profilepic.jpeg"
        class="aspect-square w-full scale-125 rounded-full object-cover object-center"
      />
    </div>
    <!-- header -->
    <p class="text-primary text-center">Hi, I am Daniele 👋🏻</p>
    <!-- title -->
    <h1 class="text-gradient py-2 text-center text-4xl md:text-5xl">
      I love building software, <br class="hidden md:inline-block" />scaling
      teams, and <br class="inline-block sm:hidden" />
      creating <br class="hidden md:inline-block" />delightful experiences.
    </h1>
    <!-- CTA -->
    <BaseButtonLink
      href="https://github.com/floroz"
      target="_blank"
      ><template #default>Check my work</template>
      <template #icon-right>
        <Icon
          name="fe:link-external"
          size="24"
        />
      </template>
    </BaseButtonLink>
  </section>
</template>
