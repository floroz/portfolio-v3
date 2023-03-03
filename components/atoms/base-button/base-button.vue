<script setup lang="ts"></script>
<template>
  <button
    class="flex items-center gap-x-2 rounded-md bg-zinc-800 py-4 px-8 transition-transform duration-150 ease-out hover:scale-95"
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
