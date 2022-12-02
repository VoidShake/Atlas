import { defineApolloClient } from '@nuxtjs/apollo'
import introspectionResult from '../graphql/generated'
import typePolicies from '../graphql/typePolicies'

export default defineApolloClient({
   httpEndpoint: '/api/graphql',
   inMemoryCacheOptions: {
      typePolicies,
      possibleTypes: introspectionResult.possibleTypes,
   },
})
