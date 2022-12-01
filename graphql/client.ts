import { defineApolloClient } from '@nuxtjs/apollo'
import introspectionResult from './generated'
import typePolicies from './typePolicies'

export default defineApolloClient({
   httpEndpoint: '/api/graphql',
   inMemoryCacheOptions: {
      typePolicies,
      possibleTypes: introspectionResult.possibleTypes,
   },
})
