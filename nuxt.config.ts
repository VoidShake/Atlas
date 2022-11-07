import introspectionResult from './graphql/generated'

export default defineNuxtConfig({
   modules: ['@nuxtjs/apollo', '@nuxtjs/color-mode', '@nuxtjs/tailwindcss'],

   postcss: {
      plugins: {
         'postcss-for': {},
      },
   },

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

   build: {
      transpile: ['graphql', '@heroicons/vue'],
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
