import introspectionResult from '../graphql/generated'

export default {
   // will be overridden by plugins/apollo.ts using the runtimeConfig
   httpEndpoint: 'replace-me',
   inMemoryCacheOptions: {
      possibleTypes: introspectionResult.possibleTypes,
   },
}
