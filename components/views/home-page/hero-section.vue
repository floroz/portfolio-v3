<script setup lang="ts">
  import BaseButton from "~/components/atoms/base-button/base-button.vue";
</script>

<template>
  <div class="p-4 flex flex-col gap-y-4 items-center">
    <!-- Avatar -->
    <div class="rounded-full bg-gray-500 p-8">DT</div>
    <!-- header -->
    <p class="text-primary text-center">Hi, I am Daniele 👋🏻</p>
    <!-- title -->
    <h1 class="text-4xl text-gradient text-center mb-4">
      Building software, <br />scaling teams, and creating <br />delightful
      experiences.
    </h1>
    <!-- button -->
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
