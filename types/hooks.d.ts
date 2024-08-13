declare module 'nuxt/app' {
   import type { ApolloClientKeys } from '#apollo'
   import type { ErrorHandler } from '@apollo/client/link/error'

   interface RuntimeNuxtHooks {
      'apollo:error': ErrorHandler
      'apollo:auth': (params: { client: ApolloClientKeys; token: Ref<string | null> }) => void
   }
}
