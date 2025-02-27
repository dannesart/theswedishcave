// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  css: ["~~/assets/main.css"],
  modules: ["@nuxtjs/tailwindcss", "@nuxt/icon"],
  tailwindcss: {
    exposeConfig: true,
    viewer: true,
    config: {
      theme: {
        extend: {
          fontFamily: {
            antonio: ["Antonio"],
            patua: ["Patua One"],
            figtree: ["Figtree"],
            bebas: ["Bebas Neue"],
          },
        },
      },
    },
  },
});