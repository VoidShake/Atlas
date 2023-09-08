import { defineApolloClient } from '@nuxtjs/apollo'
import introspectionResult from '../graphql/generated'
import typePolicies from '../graphql/typePolicies'

export default defineApolloClient({
   // will be overridden by plugins/apollo.ts using the runtimeConfig
   httpEndpoint: 'replace-me',
   inMemoryCacheOptions: {
      typePolicies,
      possibleTypes: introspectionResult.possibleTypes,
   },
})
