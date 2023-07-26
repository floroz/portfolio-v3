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

  const contactLinks = [
    {
      icon: "ant-design:mail-outlined",
      href: "mailto:contact@danieletortora.com",
      label: "Email",
    },
    {
      icon: "ant-design:environment-outlined",
      href: "https://www.google.com/maps/place/Zurich",
      label: "Zurich, Switzerland",
    },
    {
      icon: "ant-design:link-outlined",
      href: "https://www.danieletortora.com",
      label: "Portfolio",
    },
    {
      icon: "ant-design:github-outlined",
      href: "https://github.com/floroz",
      label: "GitHub",
    },
  ];
</script>

<template>
  <div
    class="flex w-full flex-col items-center justify-center px-16 py-8 font-['Open_Sans'] text-base"
  >
    <main class="w-full max-w-4xl bg-white">
      <header
        class="relative flex w-full flex-col items-center justify-center gap-0.5 border-b-[1px] border-b-gray-800 pb-2"
      >
        <h1 class="font-['Open_Sans'] text-2xl font-bold">Daniele Tortora</h1>
        <h2 class="text-xl font-medium">
          Techical Lead | Senior Frontend Engineer | UX/UI | Accessibility
        </h2>
      </header>
      <section
        class="mb-2 flex w-full flex-wrap justify-evenly gap-x-2 gap-y-1 py-2"
      >
        <div
          v-for="link in contactLinks"
          :key="link.href"
          class="flex flex-row items-center justify-center gap-x-1 text-sm font-bold"
        >
          <Icon :name="link.icon" />
          <a :href="link.href">{{ link.label }}</a>
        </div>
      </section>
      <section class="mb-4">
        <h3
          class="mb-2 w-full border-b-[1px] border-b-gray-800 pb-2 text-base uppercase"
        >
          Work Experience
        </h3>
        <WorkSection
          v-for="entry in resumeSchema.work"
          :key="entry.startDate"
          :entry="entry"
        />
      </section>
      <section>
        <h3 class="mb-2 border-b-[1px] border-b-gray-800 pb-2 uppercase">
          Education
        </h3>
        <div class="mb-2 flex flex-col gap-y-0.5">
          <div class="mt-1 flex w-full justify-between text-base">
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
          <div class="flex w-full justify-between text-base">
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
