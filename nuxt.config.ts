// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr: false,
  //modules
  modules: ["vuetify-nuxt-module", "@nuxtjs/i18n"],
  vuetify: {
    moduleOptions: {
      /* module specific options */
    },
    vuetifyOptions: {
      /* vuetify options */
    },
  },
  i18n: {
    vueI18n: "./i18n.config.ts",
    locales: ["pl", "en"],
    defaultLocale: "pl",
    strategy: "prefix_except_default",
    fallbackLocale: "en",
  },
});
