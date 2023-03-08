<script setup lang="ts">
  import HeroSection from "~~/components/templates/home-page/hero-section/hero-section.vue";
  import CompanyCarousel from "~~/components/templates/home-page/company-carousel/company-carousel.vue";
  import AboutSection from "~~/components/templates/home-page/about-section/about-section.vue";
</script>

<template>
  <NuxtLayout>
    <HeroSection />
    <CompanyCarousel />
    <AboutSection />
  </NuxtLayout>
</template>
