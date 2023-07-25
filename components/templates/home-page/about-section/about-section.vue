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
          I am a highly skilled software engineer with over 6 years of experience in building rich user interfaces and interactive web applications. With a strong focus on usability, accessibility, and inclusivity, I specialize in translating interaction design and product concepts into immersive experiences for end users.
        </p>

        <p>
          As a tech lead and senior frontend developer, I have a proven track record in driving successful frontend architecture, implementing design systems, and creating component libraries. I excel in JavaScript/TypeScript development and possess commercial experience with all modern front-end frameworks such as React, Vue, and Angular. My understanding of HTML and CSS semantics, along with modern meta-frameworks like Next.js and Nuxt.js, allows me to solve various business problems and cater to diverse user needs.
        </p>

        <p>
         Adopting a DevOps mindset, I have successfully improved continuous integration pipelines on platforms like GitHub Actions, CircleCI, and Jenkins. Test automation is a passion of mine, and I have helped teams enhance their QA processes through effective testing strategies and utilizing tools such as Jest/Vitest, Cypress/Playwright, Storybook, and Percy/Chromatic.
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
