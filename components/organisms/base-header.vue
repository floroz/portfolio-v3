<script setup lang="ts">
  import SocialLinks from "~/components/molecules/social-links.vue";
</script>
<!-- eslint-disable tailwindcss/no-custom-classname -->
<template>
  <header class="header-styled max-page-width border-b border-zinc-700">
    <nav>
      <ul class="flex h-full w-full items-center gap-x-6">
        <li class="text-primary grow">
          <NuxtLink
            to="https://www.linkedin.com/in/danieletortora/"
            aria-label="Get in touch via LinkedIn"
            class="text-primary animation-appear cursor-pointer opacity-0 hover:text-zinc-200"
          >
            <div class="flex items-center gap-2">
              <div class="rounded-full bg-zinc-800 p-4">
                <Icon
                  name="fe:mail"
                  size="24"
                ></Icon>
              </div>
              <span>Get in touch</span>
            </div>
          </NuxtLink>
        </li>
        <SocialLinks animate />
      </ul>
    </nav>
  </header>
</template>

<style scoped>
  .animation-appear {
    animation-name: appear;
    animation-duration: 450ms;
    animation-timing-function: ease-in;
    animation-fill-mode: forwards;
    animation-delay: var(--header-animation-delay);
  }
  @keyframes appear {
    to {
      opacity: 1;
    }
  }
</style>
