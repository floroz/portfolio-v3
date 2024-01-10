<script setup lang="ts">
  import BaseButtonLink from "~~/components/atoms/base-button-link/base-button-link.vue";
</script>

<template>
  <section class="mb-24 mt-12">
    <div
      class="m-auto flex max-w-4xl flex-col items-center gap-y-12 p-4 sm:px-8"
    >
      <h2 class="text-gradient text-left text-4xl">About me</h2>
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
      <div class="text-primary flex flex-col gap-y-8 text-lg">
        <p>
          I am a highly skilled Technical Lead and Senior Frontend Engineer with
          a proven track record of success in building rich user interfaces and
          interactive web applications. With over 7 years of experience, I
          specialize in translating interaction design and product concepts into
          immersive experiences that prioritize usability, accessibility, and
          inclusivity.
        </p>

        <p>
          As a tech lead, I have driven successful front-end architecture,
          implemented design systems, and created component libraries, resulting
          in improved team efficiency and code quality. I have a passion for
          promoting a healthy team culture that values clean, modular, and
          loosely coupled code. By identifying and implementing suitable design
          patterns, I ensure the creation of flexible and maintainable software
          architectures.
        </p>

        <p>
          I excel in JavaScript/TypeScript development and possess commercial
          experience with all modern front-end frameworks such as React, Vue,
          and Angular. My understanding of HTML and CSS semantics, along with
          modern meta-frameworks like Next.js and Nuxt.js, allows me to solve
          various business problems and cater to diverse user needs. I stay on
          top of the latest trends and tools to continuously adapt and thrive in
          the ever-evolving front-end landscape.
        </p>

        <p>
          I am passionate about test automation and have helped teams enhance
          their QA processes through effective testing strategies. My
          proficiency includes tools such as Jest/Vitest, Cypress/Playwright,
          Storybook, and Percy/Chromatic. By implementing robust testing
          methodologies, I ensure the delivery of reliable and bug-free
          software. Having adopted a DevOps mindset, I have successfully
          improved continuous integration pipelines using platforms such as
          GitHub Actions, CircleCI, and Jenkins. By streamlining development
          processes, I have contributed to faster delivery cycles without
          compromising code quality.
        </p>

        <p>
          I take pride in being a team player and mentor. I have fostered a
          healthy team culture that encourages collaboration and knowledge
          sharing. By promoting clean code practices, I have empowered teams to
          build software that is scalable, robust, and easier to maintain.
        </p>
      </div>
    </div>
  </section>
</template>
