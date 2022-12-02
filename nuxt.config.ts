export default defineNuxtConfig({
   modules: [
      './modules/assets',
      '@nuxtjs/apollo',
      '@nuxtjs/color-mode',
      '@nuxtjs/tailwindcss',
      '@formkit/nuxt',
      '@nuxtjs/i18n',
   ],

   postcss: {
      plugins: {
         'postcss-for': {},
      },
   },

   css: ['leaflet/dist/leaflet.css', '@vueform/multiselect/themes/default.css', 'v-network-graph/lib/style.css'],

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
      clients: { default: './graphql/client.ts' },
   },

   i18n: {
      locales: [
         {
            code: 'en',
            file: 'en_US.json',
            name: 'English',
         },
         {
            code: 'de',
            file: 'de_DE.json',
            name: 'Deutsch',
         },
      ],
      strategy: 'no_prefix',
      lazy: true,
      langDir: 'lang',
      defaultLocale: 'en',
   },

   typescript: {
      strict: true,
      shim: false,
   },
})
