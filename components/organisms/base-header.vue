<script setup lang="ts">
  const LINKS = [
    {
      id: "linkedin",
      iconName: "ant-design:linkedin-filled",
      href: "https://www.linkedin.com/in/danieletortora/",
      text: "LinkedIn",
    },
    {
      id: "GitHub",
      iconName: "ant-design:github-filled",
      href: "https://github.com/floroz",
      text: "GitHub",
    },
    {
      id: "Twitter",
      iconName: "ant-design:twitter-circle-filled",
      href: "https://twitter.com/floroz87",
      text: "Twitter",
    },
  ];
</script>

<template>
  <header class="max-w-4xl p-4 h-20 border-b border-b-zinc-800 m-auto">
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
        <li
          v-for="(link, index) in LINKS"
          :key="link.id"
          class="cursor-pointer text-primary hover:text-zinc-200"
        >
          <NuxtLink
            :to="link.href"
            :aria-label="link.text"
            class="flex items-center gap-x-4"
            target="_blank"
          >
            <Icon
              class="sm:!hidden"
              :name="link.iconName"
              size="24"
            ></Icon>
            <span class="hidden sm:inline">{{ link.text }}</span>
            <span
              v-if="index !== LINKS.length - 1"
              class="hidden sm:inline"
              >/</span
            >
          </NuxtLink>
        </li>
      </ul>
    </nav>
  </header>
</template>
