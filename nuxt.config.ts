// eslint-disable-next-line @typescript-eslint/no-unsafe-call
export default defineNuxtConfig({
  css: ["~/assets/css/fonts.css", "~/assets/css/main.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
});
