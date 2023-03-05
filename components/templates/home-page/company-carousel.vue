<script setup lang="ts">
  import MetaLogo from "~/assets/svg/meta.svg";
  import TundraLogo from "~/assets/svg/tundra.svg";
  import OvoLogo from "~/assets/svg/ovo.svg";
  import TrayLogo from "~/assets/svg/tray.svg";
</script>

<template>
  <div
    class="my-12 flex w-full items-center justify-center bg-zinc-800 md:my-16 lg:my-24"
  >
    <div
      class="text-primary flex w-full max-w-6xl items-center justify-center gap-x-2 p-8 sm:gap-x-4 md:gap-x-8"
    >
      <MetaLogo class="text-primary w-[11rem]" />
      <TrayLogo class="text-primary w-[11rem]" />
      <OvoLogo class="text-primary w-[11rem]" />
      <TundraLogo class="text-primary w-[11rem]" />
    </div>
  </div>
</template>
