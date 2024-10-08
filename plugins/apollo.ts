import type { ApolloClient, ServerError } from '@apollo/client'
import { createHttpLink, from } from '@apollo/client/core'
import { setContext } from '@apollo/client/link/context'
import { onError } from '@apollo/client/link/error'

export default defineNuxtPlugin(nuxtApp => {
   nuxtApp.hook('apollo:error', ({ networkError, forward, operation }) => {
      if ((networkError as ServerError)?.statusCode === 401) {
         logout()
         return forward(operation)
      }
   })

   nuxtApp.hook('apollo:auth', ({ token }) => {
      const cookie = useToken()
      token.value = cookie.value
   })

   const config = useRuntimeConfig()
   const apollo = nuxtApp.$apollo as { defaultClient: ApolloClient<unknown> }

   const authLink = setContext(async (_, { headers }) => {
      const token = ref<string | null>(null)
      await nuxtApp.callHook('apollo:auth', { token, client: 'default' })

      if (!token.value) return { headers }
      return {
         headers: {
            ...headers,
            Authorization: `Bearer ${token.value}`,
         },
      }
   })

   const httpLink = createHttpLink({
      uri: `${config.public.apiUrl}/graphql`,
   })

   const errorLink = onError(error => {
      nuxtApp.callHook('apollo:error', error)
   })

   const link = from([errorLink, authLink, httpLink])
   apollo.defaultClient.setLink(link)
})
