<script setup lang="ts">
  import { resumeSchema } from "../config/resume-schema";
  import WorkSection from "../components/molecules/work-section.vue";

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
    link: [
      {
        rel: "preconnect",
        href: "https://fonts.googleapis.com",
      },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossorigin: "anonymous",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&display=swap",
      },
    ],
  });
</script>

<template>
  <div
    class="text-md w-full text-md flex flex-col items-center justify-center py-8 px-16 font-['Open_Sans']"
  >
    <main class="w-full bg-white max-w-4xl">
      <header
        class="w-full flex justify-center items-center flex-col gap-0.5 with-border-bottom relative"
      >
        <h1 class="font-bold text-2xl font-['Open_Sans']">Daniele Tortora</h1>
        <h2 class="font-medium text-xl">
          Techical Lead | Senior Frontend Engineer | UX/UI | Accessibility
        </h2>
      </header>
      <section class="mb-2 py-2 w-full flex flex-wrap justify-evenly gap-x-2 gap-y-1">
        <div class="link-wrapper">
          <Icon name="ant-design:mail-outlined" />
          <a href="mailto:contact@danieletortora.com"
            >Email</a
          >
        </div>
        <div class="link-wrapper">
          <Icon name="ant-design:environment-outlined" />
          <p>Zurich, Switzerland</p>
        </div>
        <div class="link-wrapper">
          <Icon name="ant-design:link-outlined" />
          <a href="https://www.danieletortora.com">Portfolio</a>
        </div>
        <div class="link-wrapper">
          <Icon name="ant-design:github-outlined" />
          <a href="https://github.com/floroz">GitHub</a>
        </div>
      </section>
      <section class="mb-4">
        <h3 class="mb-2 uppercase w-full text-md with-border-bottom">
          Work Experience
        </h3>
        <WorkSection
          v-for="entry in resumeSchema.work"
          :entry="entry"
          :key="entry.startDate"
        />
      </section>
      <section>
        <h3 class="uppercase with-border-bottom mb-2">Education</h3>
        <div class="flex flex-col gap-y-0.5 mb-2">
          <div class="mt-1 flex w-full justify-between text-md">
            <p>Università degli Studi di Napoli Federico II</p>
            <p>Naples, Italy</p>
          </div>
          <div class="flex w-full justify-between">
            <p>
              <span class="font-bold">MSc Clinical Psychology</span>. Grade:
              110/110
            </p>
            <p>2012-2015</p>
          </div>
        </div>
        <div class="flex flex-col gap-y-0.5">
          <div class="flex w-full justify-between text-md">
            <p>Università degli Studi di Napoli Federico II</p>
            <p>Naples, Italy</p>
          </div>
          <div class="flex w-full justify-between">
            <p><span class="font-bold">MSc Psychology</span>. Grade: 110/110</p>
            <p>2008-2012</p>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<style scoped>

  .link-wrapper {
    @apply gap-x-1 flex flex-row items-center justify-center text-sm font-bold;
  }

  .with-border-bottom {
    @apply border-b-gray-800 border-b-[1px] pb-2;
  }
</style>
