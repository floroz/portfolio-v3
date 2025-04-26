import siteMetadata from "./config/site-metadata";
// eslint-disable-next-line @typescript-eslint/no-unsafe-call
export default defineNuxtConfig({
  modules: ["nuxt-icon", "nuxt-svgo", "@nuxt/image"],
  ssr: true,
  css: ["~/assets/css/fonts.css", "~/assets/css/main.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  svgo: {
    defaultImport: "component",
  },

  app: {
    head: {
      htmlAttrs: {
        lang: "en",
      },
      link: [
        {
          rel: "icon",
          type: "image/x-icon",
          href: "/favicon.ico",
        },
      ],
      title: siteMetadata.pageTitle,
      meta: [
        { name: "title", content: siteMetadata.pageTitle },
        { name: "author", content: "Daniele Tortora" },
        {
          name: "keywords",
          content:
            "Daniele Tortora, Daniele, Tortora, floroz, floroz87, Technical Lead, Senior Software Engineer, Senior Frontend Engineer, UX UI, developer, software developer, web developer, javascript, react developer, vue developer",
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
          content: "https://danieletortora.netlify.app/images/twitter-card.png",
        },
        { name: "twitter:creator:id", content: "floroz87" },
        { name: "twitter:description", content: siteMetadata.pageDescription },
        {
          name: "twitter:image",
          content: "https://danieletortora.netlify.app/images/twitter-card.png",
        },
        { name: "application-name", content: "@floroz/portfolio-v3" },
      ],
    },
  },

  compatibilityDate: "2024-11-15",
});
