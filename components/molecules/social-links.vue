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
  <li
    v-for="(link, index) in LINKS"
    :key="link.id"
    class="text-primary cursor-pointer hover:text-zinc-200"
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
</template>
