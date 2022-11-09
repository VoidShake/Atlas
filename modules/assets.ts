import { copyFileSync, existsSync, mkdirSync } from 'fs'
import { defineNuxtModule } from '@nuxt/kit'

export default defineNuxtModule({
   setup(_, nuxt) {
      nuxt.hook('build:before', () => {
         if (!existsSync('assets/emblem')) return
         if (!existsSync('public')) mkdirSync('public')
         copyFileSync('assets/emblem/favicon.ico', 'public/favicon.ico')
      })
   },
})
