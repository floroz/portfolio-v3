<script setup lang="ts">
  import BaseButtonLink from "~~/components/atoms/base-button-link/base-button-link.vue";
</script>

<template>
  <section class="mt-12 mb-24">
    <div
      class="m-auto flex max-w-4xl flex-col items-center gap-y-12 p-4 sm:px-8"
    >
      <h2 class="text-gradient text-left text-4xl">About me</h2>
      <div class="text-primary flex flex-col gap-y-8 text-lg">
        <p>
          I am a highly skilled software engineer with over 5 years of
          experience in building rich user interfaces and interactive web
          applications.
        </p>

        <p>
          With a strong focus on usability, accessibility and inclusivity, I
          specialise in translating interaction design and product concepts into
          immersive experiences for end users.
        </p>

        <p>
          I specialise in JavaScript/TypeScript development and have commercial
          experience with all modern front-end frameworks (React, Vue, Angular)
          along with a strong understanding of HTML and CSS semantics, modern
          meta-frameworks (Next.js, Nuxt.js) and advanced rendering techniques
          to solve various business problems and user needs.
        </p>

        <p>
          I have a DevOps mindset, with a proven track record of improving
          continuous integration pipelines on GitHub Actions, CircleCi and
          Jenkins platforms. With a passion for test automation, I have helped
          many teams improve their QA processes by implementing various testing
          strategies to support continuous delivery and deployments using tools
          such as Jest/Vitest, Cypress/Playwright, Storybook and
          Percy/Chromatic.
        </p>

        <p>
          As a team player and mentor, I am committed to building a healthy team
          culture that values clean, modular and loosely coupled code. I excel
          at problem-solving, creating flexible and maintainable software
          architectures, and implementing SOLID principles and design patterns.
        </p>
      </div>
      <BaseButtonLink
        external
        href="/pdf/resume.pdf"
        >Download my resume
        <template #icon-right>
          <Icon
            name="fe:document"
            size="24"
          />
        </template>
      </BaseButtonLink>
    </div>
  </section>
</template>
