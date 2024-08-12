import { browserTracingIntegration, init, replayIntegration } from '@sentry/vue'

export default defineNuxtPlugin({
   setup: ({ vueApp }) => {
      const config = useRuntimeConfig()
      const router = useRouter()

      if (!config.public.sentryDsn) {
         // eslint-disable-next-line no-console
         console.warn('Sentry DSN not set, skipping Sentry initialization')
         return
      }

      init({
         app: vueApp,
         dsn: config.public.sentryDsn,
         environment: config.public.sentryEnvironment,
         integrations: [replayIntegration(), browserTracingIntegration({ router })],
         tracesSampleRate: 1.0,
         tracePropagationTargets: ['localhost'],
         replaysSessionSampleRate: 1.0,
         replaysOnErrorSampleRate: 1.0,
      })
   },
})
