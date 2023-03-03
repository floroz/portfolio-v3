<script setup lang="ts">
  import MetaLogo from "~/assets/svg/meta.svg";
  import TundraLogo from "~/assets/svg/tundra.svg";
  import OvoLogo from "~/assets/svg/ovo.svg";
  import TrayLogo from "~/assets/svg/tray.svg";
</script>

<template>
  <div
    class="my-12 w-full flex-col items-center justify-center md:my-16 lg:my-24"
  >
    <div
      class="text-primary flex w-full items-center justify-center gap-x-8 bg-zinc-800 p-8"
    >
      <MetaLogo class="text-primary w-[250px] p-2 md:w-[150px]" />
      <TrayLogo class="text-primary w-[160px]" />
      <OvoLogo class="text-primary w-[140px]" />
      <TundraLogo class="text-primary w-[175px] p-2" />
    </div>
  </div>
</template>
