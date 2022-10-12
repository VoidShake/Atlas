export default defineNuxtConfig({
  buildModules: ["@nuxtjs/tailwindcss"],

  modules: ["@nuxtjs/apollo"],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  css: ["leaflet/dist/leaflet.css"],

  vite: {
    server: {
      proxy: {
        "/api/": "http://localhost:8080",
        "/dynmap/": {
          target: "https://mc.westeroscraft.com",
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
    shim: false,
  },
});
