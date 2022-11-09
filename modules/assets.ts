import { copyFileSync, existsSync, mkdirSync } from 'fs'
import { defineNuxtModule } from '@nuxt/kit'

export default defineNuxtModule({
   setup(_, nuxt) {
      nuxt.hook('build:before', () => {
         if (!existsSync('public')) mkdirSync('public')
         const favicon = 'assets/emblem/favicon.ico'
         if (existsSync(favicon)) copyFileSync(favicon, 'public/favicon.ico')
      })
   },
})
