// eslint-disable-next-line @typescript-eslint/no-unsafe-call
export default defineNuxtConfig({
  // removed @nuxt/image-edge until this is fixed https://github.com/nuxt/image/issues/689
  // modules: ["nuxt-icon", "@nuxt/image-edge", "nuxt-svgo"],
  modules: ["nuxt-icon", "nuxt-svgo"],
  css: ["~/assets/css/fonts.css", "~/assets/css/main.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  // image: {},
});
