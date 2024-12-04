// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxt/ui"],
  // css: ["~/assets/css/tailwind.css"],

  components: true,

  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },

  app: {
    pageTransition: { name: "page", mode: "out-in" },
    head: {
      title: "James - Full Stack Developer",
    },
  },
});
