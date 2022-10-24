export default defineNuxtConfig({
   modules: ['@nuxtjs/apollo', '@nuxtjs/color-mode', '@nuxtjs/tailwindcss'],

   // Build Configuration: https://go.nuxtjs.dev/config-build
   build: {},

   css: ['leaflet/dist/leaflet.css', '@vueform/multiselect/themes/default.css'],

   vite: {
      server: {
         proxy: {
            '/api/': 'http://localhost:8080',
            '/auth/': 'http://localhost:8080',
            '/dynmap/': {
               target: 'https://map.somethingcatchy.net/',
               changeOrigin: true,
               rewrite: (path: string) => path.replace(/^\/dynmap/, ''),
            },
         },
      },
   },

   apollo: {
      clients: {
         default: {
            httpEndpoint: '/api/graphql',
         },
      },
   },

   typescript: {
      strict: true,
      shim: false,
   },
})
