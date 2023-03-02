<script setup lang="ts">
  import BaseButton from "~/components/atoms/base-button/base-button.vue";
  import MetaLogo from "~/assets/svg/meta.svg";
  import TundraLogo from "~/assets/svg/tundra.svg";
  import OvoLogo from "~/assets/svg/ovo.svg";
  import TrayLogo from "~/assets/svg/tray.svg";
</script>

<template>
  <!-- Spacer Div -->
  <div class="w-full h-24 md:h-32" />
  <div class="p-4 flex flex-col gap-y-8 items-center">
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
  </div>
  <!-- Company Section TO EXTRACT -->
  <div class="text-primary">
    <MetaLogo class="text-primary w-[240px]" />
    <TrayLogo class="text-primary w-[240px]" />
    <OvoLogo class="text-primary w-[240px]" />
    <TundraLogo class="text-primary w-[240px]" />
  </div>
</template>
