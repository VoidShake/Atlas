import { captureException, close } from '@sentry/vue'
import { H3Error } from 'h3'

const IGNORED_STATUS_CODES = [404, 422]

export default defineNitroPlugin(nitroApp => {
   nitroApp.hooks.hook('error', error => {
      if (error instanceof H3Error) {
         if (IGNORED_STATUS_CODES.includes(error.statusCode)) {
            return
         }
      }

      captureException(error)
   })

   nitroApp.hooks.hookOnce('close', async () => {
      await close(2000)
   })
})
