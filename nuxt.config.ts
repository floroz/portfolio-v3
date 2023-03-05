import siteMetadata from "./config/site-metadata";
// eslint-disable-next-line @typescript-eslint/no-unsafe-call
export default defineNuxtConfig({
  // removed @nuxt/image-edge until this is fixed https://github.com/nuxt/image/issues/689
  modules: ["nuxt-icon", "nuxt-svgo"],
  css: ["~/assets/css/fonts.css", "~/assets/css/main.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  app: {
    head: {
      htmlAttrs: {
        lang: "en",
      },
      title: siteMetadata.pageTitle,
      meta: [
        { name: "title", content: siteMetadata.pageTitle },
        { name: "author", content: "Daniele Tortora" },
        {
          name: "keywords",
          content:
            "Daniele Tortora, Daniele, Tortora, floroz, floroz87, Software Engineer, Frontend Engineer, Front End Engineer, Front End Developer, developer, software developer, web developer, javascript, zurich, react developer, vue developer",
        },
        {
          name: "description",
          content: siteMetadata.pageDescription,
        },
        { name: "og:title", content: siteMetadata.pageTitle },
        {
          name: "og:description",
          content: siteMetadata.pageDescription,
        },
        {
          name: "og:url",
          content: siteMetadata.siteUrl,
        },
        {
          name: "og:image",
          content: "https://www.danieletortora.com/images/twitter-card.png",
        },
        { name: "twitter:creator:id", content: "floroz87" },
        { name: "twitter:description", content: siteMetadata.pageDescription },
        {
          name: "twitter:image",
          content: "https://www.danieletortora.com/images/twitter-card.png",
        },
        { name: "application-name", content: "@floroz/portfolio-v3" },
      ],
    },
  },
});
