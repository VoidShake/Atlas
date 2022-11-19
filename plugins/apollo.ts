import type { ServerError } from '@apollo/client'

export default defineNuxtPlugin(nuxtApp => {
   nuxtApp.hook('apollo:auth', req => {
      const token = useToken()
      if (token.value) req.token.value = token.value
   })

   nuxtApp.hook('apollo:error', error => {
      if ((error.networkError as ServerError)?.statusCode === 401) {
         logout()
      }
   })
})
