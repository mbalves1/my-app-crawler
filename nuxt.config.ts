// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@unocss/nuxt',
  ],
  build: {
    transpile: ['vuetify'],
  },
  css: [
    'vuetify/dist/vuetify.css',
  ],
})
