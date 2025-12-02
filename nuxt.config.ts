export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['@nuxt/ui'],
  ui: {
    global: true,
    icons: ['heroicons']
  },
  css: ['~/assets/css/main.css'],
  app: {
    head: {
      title: 'Mason Morrow - Theatre Educator, Performer, Playwright',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Mason Morrow - Theatre Educator, Performer, Playwright' }
      ]
    }
  }
})

