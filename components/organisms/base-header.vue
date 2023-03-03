<script setup lang="ts">
  import SocialLinks from "~/components/molecules/social-links.vue";
</script>
<template>
  <header class="header-styled border-b border-zinc-700">
    <nav>
      <ul class="flex items-center gap-x-6 w-full h-full">
        <li class="text-primary flex-grow">
          <NuxtLink
            to="mailto:contact@danieletortora.com"
            aria-label="Get in touch via email"
            class="cursor-pointer text-primary hover:text-zinc-200"
          >
            <div class="flex gap-2 items-center">
              <div class="rounded-full p-4 bg-zinc-800">
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
