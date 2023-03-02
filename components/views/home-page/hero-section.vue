<script setup lang="ts">
  import BaseButton from "~/components/atoms/base-button/base-button.vue";
</script>

<template>
  <!-- Spacer Div -->
  <div class="w-full h-24 md:h-32" />
  <div class="p-4 flex flex-col gap-y-8 items-center">
    <!-- Avatar -->
    <div>
      <NuxtImg
        preload
        format="webp"
        src="/images/profilepic.jpeg"
        sizes="sm:150px md:200px"
        class="rounded-full"
      />
    </div>
    <!-- header -->
    <p class="text-primary text-center">Hi, I am Daniele 👋🏻</p>
    <!-- title -->
    <h1 class="text-4xl text-gradient text-center mb-4">
      I love building software, <br />scaling teams, and creating
      <br />delightful experiences.
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
  </div>
</template>
