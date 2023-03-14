<script setup lang="ts">
  import BaseButtonLink from "~~/components/atoms/base-button-link/base-button-link.vue";
</script>

<template>
  <section class="mt-12 mb-24">
    <div class="m-auto flex max-w-2xl flex-col items-center gap-y-12 py-4 px-8">
      <h2 class="text-gradient text-left text-4xl">About me</h2>
      <div class="text-primary flex flex-col gap-y-2 text-lg">
        <p>
          I am a highly skilled Software Engineer with a passion for creating
          rich user interfaces and interactive web applications.
        </p>
        <p>
          With a strong focus on usability, accessibility, and inclusiveness, I
          specialize in translating interaction designs and product concepts
          into immersive experiences for end users.
        </p>
        <p>
          As a team player and mentor, I am committed to building a healthy team
          culture that values clean, modular, and loosely coupled code. I excel
          at solving problems, crafting flexible and maintainable software
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
