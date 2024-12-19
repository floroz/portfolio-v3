<script setup lang="ts">
  import BaseButtonLink from "~~/components/atoms/base-button-link/base-button-link.vue";

  function trackCheckMyWorkClick() {
    if (typeof window === "undefined" || typeof window.gtag !== "function") {
      // eslint-disable-next-line no-console
      console.warn("GA not initialized yet.");
    } else {
      window.gtag("event", "button_click", {
        event_category: "user_interaction",
        event_label: "check_work_button",
      });
    }
  }
</script>

<template>
  <!-- Spacer Div -->
  <div class="h-12 w-full sm:h-16 md:h-32" />
  <section class="max-page-width m-auto flex flex-col items-center gap-y-8 p-4">
    <!-- Avatar -->
    <!-- Current Issue in using this plugin in production: https://github.com/nuxt/image/issues/689#issuecomment-1455065750 -->
    <!-- <NuxtImg
      preload
      src="/images/profilepic.jpg"
      width="180"
      height="180"
      class="rounded-full"
    /> -->
    <div class="overflow-hidden rounded-full">
      <img
        src="/images/profilepic.jpg"
        class="aspect-square w-60 rounded-full object-cover object-center md:w-80"
        alt="Profile Picture of Daniele Tortora"
      />
    </div>
    <!-- header -->
    <p class="text-primary text-center">
      Hi, I am Daniele
      <!-- eslint-disable-next-line tailwindcss/no-custom-classname -->
      <span class="animate-wave inline-block">👋🏻</span>
    </p>
    <!-- title -->
    <h1 class="text-gradient py-2 text-center text-4xl md:text-5xl">
      I love solving problems
      <br class="hidden md:inline-block" />and building software.<br
        class="hidden md:inline-block"
      />
    </h1>
    <!-- CTA -->
    <BaseButtonLink
      href="https://github.com/floroz"
      target="_blank"
      @click="trackCheckMyWorkClick"
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

<style scoped>
  .animate-wave {
    animation-name: wave-animation;
    animation-duration: 2.5s;
    animation-iteration-count: infinite;
    transform-origin: 70% 70%;
  }
  @keyframes wave-animation {
    0% {
      transform: rotate(0deg);
    }
    10% {
      transform: rotate(14deg);
    }
    20% {
      transform: rotate(-8deg);
    }
    30% {
      transform: rotate(14deg);
    }
    40% {
      transform: rotate(-4deg);
    }
    50% {
      transform: rotate(10deg);
    }
    60% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(0deg);
    }
  }
</style>
