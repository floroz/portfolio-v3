<script setup lang="ts">
  import SocialLinks from "~/components/molecules/social-links.vue";
</script>
<template>
  <header class="header-styled max-page-width border-b border-zinc-700">
    <nav>
      <ul class="flex h-full w-full items-center gap-x-6">
        <li class="text-primary grow">
          <NuxtLink
            to="mailto:contact@danieletortora.com"
            aria-label="Get in touch via email"
            class="text-primary cursor-pointer hover:text-zinc-200"
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
        <SocialLinks />
      </ul>
    </nav>
  </header>
</template>
