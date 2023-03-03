<script setup lang="ts">
  import BaseButton from "~/components/atoms/base-button/base-button.vue";
</script>

<template>
  <!-- Spacer Div -->
  <div class="w-full h-16 md:h-32" />
  <section class="p-4 max-page-width m-auto flex flex-col gap-y-8 items-center">
    <!-- Avatar -->
    <NuxtImg
      preload
      format="webp"
      src="/images/profilepic.jpeg"
      width="180"
      height="180"
      class="rounded-full"
    />
    <!-- header -->
    <p class="text-primary text-center">Hi, I am Daniele 👋🏻</p>
    <!-- title -->
    <h1 class="text-4xl md:text-5xl text-gradient text-center mb-4">
      I love building software, <br class="hidden md:inline-block" />scaling
      teams, and <br class="inline-block sm:hidden" />
      creating <br class="hidden md:inline-block" />delightful experiences.
    </h1>
    <!-- CTA -->
    <BaseButton
      ><template #default>Check my work</template>
      <template #icon-right>
        <Icon
          name="fe:link-external"
          size="24"
        />
      </template>
    </BaseButton>
  </section>
</template>
