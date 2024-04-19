export default defineNuxtConfig({
  extends: ["@nuxt/ui-pro"],
  modules: ["@nuxt/ui", "@nuxtjs/fontaine", "@nuxtjs/google-fonts"],
  app: {
    layoutTransition: { name: "layout", mode: "out-in" },
    pageTransition: { name: "page", mode: "out-in" },
  },
  routeRules: {
    "/api/**": { cors: true },
    "/dashboard/**": { ssr: false },
  },
  fontMetrics: {
    fonts: ["DM Sans"],
  },
  googleFonts: {
    display: "swap",
    download: true,
    families: {
      "DM+Sans": [400, 500, 600, 700],
    },
  },
  ui: {
    icons: ["simple-icons", "ph"],
  },
  devtools: { enabled: true },
});
