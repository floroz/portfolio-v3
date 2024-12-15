<script setup lang="ts">
  import { useCarousel } from "~/utils/carousel";

  const { carousel } = useCarousel();
</script>

<template>
  <div
    class="my-12 flex w-full items-center justify-center overflow-hidden bg-zinc-800 md:my-16 lg:my-24"
  >
    <TransitionGroup
      name="c"
      tag="ul"
      class="text-primary relative flex w-full max-w-6xl items-center gap-x-4 p-4 sm:gap-x-4 sm:p-8 md:gap-x-32"
      appear
    >
      <li
        v-for="carouselItem in carousel"
        :key="carouselItem.id"
      >
        <component
          :is="carouselItem.component"
          :font-controlled="false"
          :width="176"
        />
      </li>
    </TransitionGroup>
  </div>
</template>

<style scoped>
  .c-move,
  .c-leave-active,
  .c-enter-active {
    transition: all 0.9s ease-out;
  }

  .c-enter-from {
    opacity: 0;
    transform: translateX(15rem);
  }

  .c-enter-to {
    opacity: 1;
    transform: translateX(0);
  }

  .c-leave-active {
    position: absolute;
  }

  .c-leave-from {
    opacity: 1;
    transform: translateX(0);
  }

  .c-leave-to {
    opacity: 0;
    transform: translateX(-15rem);
  }
</style>
