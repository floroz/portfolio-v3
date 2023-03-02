// eslint-disable-next-line @typescript-eslint/no-unsafe-call
export default defineNuxtConfig({
  modules: ["nuxt-icon", "@nuxt/image-edge", "nuxt-svgo"],
  css: ["~/assets/css/fonts.css", "~/assets/css/main.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  image: {},
});
