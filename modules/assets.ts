import { defineNuxtModule } from '@nuxt/kit'
import { copyFileSync, existsSync, mkdirSync } from 'fs'

export default defineNuxtModule({
   setup(_, nuxt) {
      nuxt.hook('build:before', () => {
         if (!existsSync('public')) mkdirSync('public')
         copyFileSync('assets/emblem/favicon.ico', 'public/favicon.ico')
      })
   },
})
