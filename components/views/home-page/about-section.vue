<script setup lang="ts">
  import BaseButtonLink from "~/components/atoms/base-button-link/base-button-link.vue";
  import { headline } from "~/config/resume-schema";

  function trackDownloadClick() {
    if (typeof window === "undefined" || typeof window.gtag !== "function") {
      // eslint-disable-next-line no-console
      console.warn("GA not initialized yet.");
    } else {
      window.gtag("event", "button_click", {
        event_category: "user_interaction",
        event_label: "download_resume_button",
      });
    }
  }
</script>

<template>
  <section class="mb-24 mt-12">
    <div
      class="m-auto flex max-w-4xl flex-col items-center gap-y-12 p-4 sm:px-8"
    >
      <h2 class="text-gradient text-left text-4xl">About me</h2>
      <div class="text-primary flex flex-col gap-y-8 text-lg">
        <p>
          {{ headline }}
        </p>
      </div>
      <BaseButtonLink
        external
        href="/pdf/resume.pdf"
        @click="trackDownloadClick"
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
