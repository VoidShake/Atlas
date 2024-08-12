import { defineNuxtModule } from '@nuxt/kit'
import { copyFileSync, existsSync, mkdirSync } from 'fs'

function copyFavicon() {
   if (!existsSync('public')) mkdirSync('public')
   const favicon = 'assets/emblem/favicon.ico'

   if (existsSync(favicon)) {
      copyFileSync(favicon, 'public/favicon.ico')
   }
}

export default defineNuxtModule({
   setup(_, nuxt) {
      nuxt.hook('build:before', () => {
         copyFavicon()
      })
   },
})
