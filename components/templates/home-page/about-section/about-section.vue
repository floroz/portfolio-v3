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
          Software Engineer with 8 years of experience in frontend, full-stack,
          and distributed systems. Skilled in TypeScript, Node.js, and frontend
          frameworks like React, Vue, and Angular, with backend expertise across
          REST APIs, gRPC, GraphQL, and integrating with storage solutions like
          Redis, PostgreSQL, and S3. Experienced in both microservices using
          Kubernetes, and monolithic architectures on cloud platforms such as
          AWS and GCP, with a DevOps-oriented approach to observability,
          performance monitoring, and deployment management
        </p>
      </div>
    </div>
  </section>
</template>
