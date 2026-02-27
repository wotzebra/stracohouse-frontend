export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },

  future: {
    compatibilityVersion: 4,
  },

  // Cloudflare Workers preset
  nitro: {
    preset: 'cloudflare',
  },

  app: {
    head: {
      title: 'Straco House - Coming Soon',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Straco House - Opening October 2026' },
        { name: 'theme-color', content: '#000000' },
        { property: 'og:title', content: 'Straco House' },
        { property: 'og:description', content: 'Coming Soon - October 2026' },
        { property: 'og:type', content: 'website' },
      ],
      link: [
        { rel: 'icon', type: 'image/png', href: '/favicon.png' },
      ],
    },
  },

  css: ['~/assets/css/main.css'],
})
