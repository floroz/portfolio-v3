<script setup lang="ts">
  import HeroSection from "~/components/views/home-page/hero-section.vue";
  import CompanyCarousel from "~/components/views/home-page/company-carousel.vue";
  import AboutSection from "~/components/views/home-page/about-section.vue";
</script>

<template>
  <NuxtLayout>
    <HeroSection />
    <CompanyCarousel />
    <AboutSection />
  </NuxtLayout>
</template>
