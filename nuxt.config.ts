// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxt/ui", "@nuxt/image"],
  // css: ["~/assets/css/tailwind.css"],

  components: true,
  ssr: true, // Ensure server-side rendering is enabled

  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },

  image: {
    // Options
  },

  app: {
    pageTransition: { name: "page", mode: "out-in" },
    head: {
      title: "James - Full Stack Developer",
      meta: [
        {
          name: "description",
          content:
            "James' eportfolio with the use of Nuxt and Tailwind for faster development",
        },
      ],

      script: [
        {
          defer: true, // Defer loading
        },
      ],
    },
  },
});
