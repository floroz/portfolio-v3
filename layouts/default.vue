<script setup lang="ts">
  import BaseFooter from "~~/components/organisms/base-footer/base-footer.vue";
  import BaseHeader from "~~/components/organisms/base-header/base-header.vue";

  useHead({
    script: [
      {
        src: "https://www.googletagmanager.com/gtag/js?id=G-86J1F6NHN7",
        async: true,
      },
      {
        innerHTML: `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());

      gtag('config', 'G-86J1F6NHN7');
      `,
        type: "text/javascript",
      },
    ],
  });
</script>

<template>
  <div class="bg-zinc-900 bg-[image:url(/svgs/bg.svg)] bg-repeat">
    <div class="flex h-auto flex-col justify-start sm:min-h-screen">
      <BaseHeader />
      <main class="grow">
        <slot />
      </main>
      <BaseFooter />
    </div>
  </div>
</template>
