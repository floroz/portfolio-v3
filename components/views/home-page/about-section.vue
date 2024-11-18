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
          Software Engineer with 8+ years of experience in frontend architecture
          and full-stack development. I craft intuitive, user-centric
          applications using modern frameworks like React, Vue, and Angular.
          I’ve designed and implemented robust component libraries and design
          systems that enhance consistency and accelerate development across
          organizations.
        </p>
        <p>
          On the backend, I have extensive experience building distributed
          microservices, designing efficient APIs (REST, GraphQL, gRPC), and
          integrating with scalable systems using Node.js, PostgreSQL, and
          Redis. My expertise extends to optimizing data pipelines, ensuring
          system reliability, and implementing cloud-native solutions with
          Kubernetes and AWS.
        </p>

        <p>
          With a strong focus on DevOps practices, I excel in CI/CD automation,
          containerization with Docker, and deploying robust production
          environments. Passionate about solving complex engineering challenges,
          I aim to deliver impactful software solutions that drive business
          success and improve user experiences.
        </p>
      </div>
    </div>
  </section>
</template>
