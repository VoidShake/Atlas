import { defineNuxtModule } from '@nuxt/kit'
import { renderFrom } from '@pssbletrngle/assets-renderer'
import { copyFileSync, existsSync, mkdirSync } from 'fs'
import { join } from 'path'

function copyFavicon() {
   if (!existsSync('public')) mkdirSync('public')
   const favicon = 'assets/emblem/favicon.ico'

   if (existsSync(favicon)) {
      copyFileSync(favicon, 'public/favicon.ico')
   }
}

async function generateIcons() {
   console.group('Rendering icons')
   const from = 'resources'
   const output = join('public', 'icons')
   const cachedResources = join('.nuxt', 'extracted-resources')

   if (!existsSync(from)) return
   if (!existsSync(output)) mkdirSync(output)
   if (!existsSync(cachedResources)) mkdirSync(cachedResources)

   await renderFrom({ from }, { output, keep: true }, { cachedResources })
   console.groupEnd()
}

export default defineNuxtModule({
   setup(_, nuxt) {
      nuxt.hook('build:before', async () => {
         copyFavicon()
         await generateIcons()
      })
   },
})
