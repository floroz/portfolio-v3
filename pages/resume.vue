<script setup lang="ts">
  import { headline, resumeSchema, skillGroups } from "../config/resume-schema";
  import WorkSection from "../components/molecules/work-section.vue";

  useHead({
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
      href: "mailto:danieletortora.contact@gmail.com",
      label: "Email",
    },
    {
      icon: "ant-design:link-outlined",
      href: "https://danieletortora.netlify.app",
      label: "Website",
    },
    {
      icon: "ant-design:github-outlined",
      href: "https://github.com/floroz",
      label: "GitHub",
    },
    {
      icon: "ant-design:linkedin-outlined",
      href: "https://www.linkedin.com/in/danieletortora/",
      label: "LinkedIn",
    },
    {
      icon: "ant-design:environment-outlined",
      href: "https://www.google.com/maps/place/Zurich",
      label: "Zurich, Switzerland",
    },
  ];
</script>

<template>
  <div
    class="flex w-full flex-col items-center justify-center px-16 py-8 font-['Open_Sans']"
  >
    <main class="w-full max-w-4xl bg-white">
      <!-- HEADER -->
      <header>
        <div class="relative flex w-full items-center justify-center gap-0.5">
          <h1 class="font-['Open_Sans'] text-2xl font-bold">Daniele Tortora</h1>
          <h2 class="text-xl font-medium">| Senior Software Engineer</h2>
        </div>
      </header>

      <!-- ABOUT -->
      <section class="mb-2 flex flex-col">
        <h3 class="sr-only">About Me</h3>
        <div
          class="mb-2 w-full border-b border-b-gray-800 pb-2 font-bold uppercase"
        />
        <!-- CONTACT LINS -->
        <div class="mb-4 flex w-full flex-wrap justify-between gap-x-2 gap-y-1">
          <div
            v-for="link in contactLinks"
            :key="link.href"
            class="flex flex-row items-center justify-center gap-x-1 text-sm font-bold"
          >
            <Icon :name="link.icon" />
            <span class="sr-only">{{ link.label }}: {{ link.href }}</span>
            <a :href="link.href">{{ link.label }}</a>
          </div>
        </div>
        <div class="grid place-items-center text-sm">
          <div class="max-w-[45rem]">
            <p class="mb-2">
              {{ headline }}
            </p>
          </div>
        </div>
      </section>

      <!-- WORK SECTION -->
      <section class="mb-4">
        <h3
          class="mb-2 w-full border-b border-b-gray-800 text-base font-bold uppercase"
        >
          Work Experience
        </h3>
        <WorkSection
          v-for="entry in resumeSchema.work"
          :key="entry.startDate"
          :entry="entry"
        />
      </section>
      <!-- EDUCATION SECTION -->
      <section class="mb-2">
        <h3 class="mb-2 border-b border-b-gray-800 font-bold uppercase">
          Education
        </h3>
        <div class="text-sm">
          <div class="mb-2 flex flex-col gap-y-0.5">
            <div class="mt-1 flex w-full justify-between">
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
            <div class="flex w-full justify-between">
              <p>Università degli Studi di Napoli Federico II</p>
              <p>Naples, Italy</p>
            </div>
            <div class="flex w-full justify-between">
              <p>
                <span class="font-bold">MSc Psychology</span>. Grade: 110/110
              </p>
              <p>2008-2012</p>
            </div>
          </div>
        </div>
      </section>
      <!-- Skills -->
      <section>
        <h3 class="mb-2 border-b border-b-gray-800 font-bold uppercase">
          Skills
        </h3>
        <ul class="text-xs grid grid-cols-2 gap-1">
          <li
            v-for="{ groupName, skills } in skillGroups"
            :key="groupName"
          >
            <p>
              <span class="font-bold">{{ groupName }}</span
              >: {{ skills.join(", ") }}
            </p>
          </li>
        </ul>
      </section>
    </main>
  </div>
</template>
