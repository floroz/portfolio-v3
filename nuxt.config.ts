// eslint-disable-next-line @typescript-eslint/no-unsafe-call
export default defineNuxtConfig({
  modules: ["nuxt-icon"],
  css: ["~/assets/css/fonts.css", "~/assets/css/main.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
});
