<script setup lang="ts"></script>
<template>
  <button
    class="flex items-center gap-x-2 py-4 px-8 rounded-md bg-zinc-800 hover:scale-95 transition-transform duration-150 ease-out"
  >
    <span
      v-if="$slots['icon-left']"
      class="text-primary"
    >
      <slot name="icon-left"></slot>
    </span>
    <span class="text-primary">
      <slot name="default" />
    </span>
    <span
      v-if="$slots['icon-right']"
      class="text-primary"
      ><slot name="icon-right"></slot
    ></span>
  </button>
</template>
