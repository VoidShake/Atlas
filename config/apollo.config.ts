import { defineApolloClient } from '@nuxtjs/apollo'
import introspectionResult from '../graphql/generated'
import typePolicies from '../graphql/typePolicies'

export default defineApolloClient({
   // will be overridden by plugins/apollo.ts using the runtimeConfig
   httpEndpoint: 'http://localhost:3000/api/graphql',
   inMemoryCacheOptions: {
      typePolicies,
      possibleTypes: introspectionResult.possibleTypes,
   },
})
