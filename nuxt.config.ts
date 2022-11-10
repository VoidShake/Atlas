import introspectionResult from './graphql/generated'

export default defineNuxtConfig({
   modules: ['@nuxtjs/apollo', '@nuxtjs/color-mode', '@nuxtjs/tailwindcss', './modules/assets', '@formkit/nuxt'],

   postcss: {
      plugins: {
         'postcss-for': {},
      },
   },

   css: ['leaflet/dist/leaflet.css', '@vueform/multiselect/themes/default.css'],

   nitro: {
      devProxy: {
         '/api/': 'http://localhost:8080/api',
         '/auth/': 'http://localhost:8080/auth',
         '/dynmap/': {
            target: 'https://map.somethingcatchy.net/',
            changeOrigin: true,
         },
      },
   },

   build: {
      transpile: ['graphql', '@heroicons/vue', 'lodash'],
   },

   apollo: {
      clients: {
         default: {
            httpEndpoint: '/api/graphql',
            inMemoryCacheOptions: {
               possibleTypes: introspectionResult.possibleTypes,
            },
         },
      },
   },

   typescript: {
      strict: true,
      shim: false,
   },
})
