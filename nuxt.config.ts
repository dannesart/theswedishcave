// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  css: ["~~/assets/main.css"],
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxt/icon",
    "v-wave/nuxt",
    "@nuxtjs/supabase",
    "nuxt-mongoose",
  ],
  runtimeConfig: {
    BASE_URL: process.env.BASE_URL,
    public: {
      BASE_URL: process.env.BASE_URL,
    },
  },
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
  supabase: {
    url: process.env.SUPABASE_URL,
    key: process.env.SUPABASE_KEY,
    redirectOptions: {
      login: "/auth",
      callback: "/",
      exclude: ["/", "/create-account"],
    },
  },
});