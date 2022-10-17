export default defineNuxtConfig({
  modules: ["@nuxtjs/apollo", "@nuxtjs/color-mode", "@nuxtjs/tailwindcss"],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  css: ["leaflet/dist/leaflet.css"],

  vite: {
    server: {
      proxy: {
        "/api/": "http://localhost:8080",
        "/auth/": "http://localhost:8080",
        "/dynmap/": {
          target: "https://map.somethingcatchy.net/",
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/dynmap/, ""),
        },
      },
    },
  },

  apollo: {
    clients: {
      default: {
        httpEndpoint: "/api/graphql",
      },
    },
  },

  typescript: {
    strict: true,
    shim: false,
  },
});
