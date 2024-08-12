import { browserTracingIntegration, init, replayIntegration } from '@sentry/vue'

export default defineNuxtPlugin({
   setup: nuxt => {
      const config = useRuntimeConfig()

      init({
         app: nuxt.vueApp,
         dsn: config.public.sentryDsn,
         environment: config.public.sentryEnvironment,
         integrations: [browserTracingIntegration(), replayIntegration()],
         tracesSampleRate: 1.0,
         tracePropagationTargets: ['localhost'],
         replaysSessionSampleRate: 1.0,
         replaysOnErrorSampleRate: 1.0,
      })
   },
})
