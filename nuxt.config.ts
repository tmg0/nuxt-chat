export default defineNuxtConfig({
  modules: ["@nuxtjs/tailwindcss"],
  app: {
    baseURL: '/_prefix'
  },
  nitro: {
    experimental: {
      websocket: true,
      tasks: true,
      database: true,
    },
  },
  $production: {
    nitro: {
      database: {
        default: {
          connector: 'bun'
        }
      }
    }
  }
})
