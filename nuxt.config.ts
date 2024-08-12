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
         '/api': 'http://localhost:8080/api',
         '/auth': 'http://localhost:8080/auth',
         '/dynmap': 'http://localhost:8123',
      },
   },

   build: {
      transpile: ['graphql', 'tslib'],
   },

   apollo: {
      clients: { default: 'config/apollo.config.ts' },
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

   formkit: {
      configFile: 'config/formkit.config.ts',
   },

   tailwindcss: {
      configPath: 'config/tailwind.config.ts',
   },

   typescript: {
      strict: true,
      shim: false,
   },

   runtimeConfig: {
      public: {
         apiUrl: 'http://localhost:3000/api',
      },
   },

   appConfig: {
      buildName: process.env.BUILD_NAME ?? 'dev',
      buildLink: process.env.BUILD_LINK ?? '',
   },

   experimental: {
      externalVue: false,
   },

   compatibilityDate: '2024-07-30',
})
