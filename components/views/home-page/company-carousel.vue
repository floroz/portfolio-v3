<script setup lang="ts">
  import MetaLogo from "~/assets/svg/meta.svg";
  import TundraLogo from "~/assets/svg/tundra.svg";
  import OvoLogo from "~/assets/svg/ovo.svg";
  import TrayLogo from "~/assets/svg/tray.svg";
</script>

<template>
  <div
    class="my-12 md:my-16 lg:my-24 w-full flex-col items-center justify-center"
  >
    <div
      class="text-primary bg-zinc-800 flex p-8 items-center justify-center gap-x-8 w-full"
    >
      <MetaLogo class="text-primary w-[250px] md:w-[150px] p-2" />
      <TrayLogo class="text-primary w-[160px]" />
      <OvoLogo class="text-primary w-[140px]" />
      <TundraLogo class="text-primary w-[175px] p-2" />
    </div>
  </div>
</template>
