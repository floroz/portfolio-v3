<script setup lang="ts">
  import { SOCIAL_LINKS } from "~~/constants/social-links";

  defineProps<{
    animate?: boolean;
  }>();
</script>
<!-- eslint-disable tailwindcss/no-custom-classname -->
<template>
  <li
    v-for="(link, index) in SOCIAL_LINKS"
    :key="link.id"
    class="text-primary cursor-pointer hover:text-zinc-200"
  >
    <NuxtLink
      :to="link.href"
      :aria-label="link.text"
      class="flex items-center gap-x-4 opacity-0"
      :class="{
        'fade-in': animate,
        // immediately reach final animation state
        // if animations are disabled
        'translate-y-0 opacity-100': !animate,
      }"
      :style="{
        // stagger animation
        '--links-item-delay': `${index * 100}ms`,
      }"
      target="_blank"
    >
      <Icon
        class="sm:!hidden"
        :name="link.iconName"
        size="24"
      ></Icon>
      <span class="hidden sm:inline">{{ link.text }}</span>
      <span
        v-if="index !== SOCIAL_LINKS.length - 1"
        class="hidden sm:inline"
        >/</span
      >
    </NuxtLink>
  </li>
</template>

<style scoped>
  .fade-in {
    animation-name: fade-in;
    animation-duration: 200ms;
    animation-timing-function: ease-in;
    animation-fill-mode: forwards;
    animation-delay: calc(
      var(--header-animation-delay) + var(--links-item-delay)
    );
  }

  @keyframes fade-in {
    from {
      opacity: 0;
      transform: translateY(-1.5rem);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
</style>
