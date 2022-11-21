import { generateClasses } from '@formkit/themes'
import { DefaultConfigOptions } from '@formkit/vue'
import { mapValues } from 'lodash-es'
import MapPinIcon from '@heroicons/vue/24/solid/MapPinIcon'

const base: Record<string, string> = {
   inner: `
   p-2 rounded transition 
   ring-0 ring-accent-500 bg-solid-800 
   outline outline-2 outline-solid-700 
   overflow-hidden
   focus-within:ring-2
   `,
   input: 'w-full px-3 border-none outline-none bg-transparent',
   prefixIcon: 'px-4 bg-solid-700',
   suffixIcon: 'px-4',
}

const innerFlex = 'flex items-center gap-1'
const icon = 'inline h-12 -m-2 py-4 px-2 align-stretch flex align-center'

const button = {
   input: `
      ${innerFlex}
      rounded select-none transition
      px-4 py-2
      bg-accent-600 ring-accent-400 ring-0 text-white
      hover:ring-2 hover:bg-accent-500
      disabled:bg-solid-600 disabled:opacity-75 disabled:ring-0 disabled:cursor-not-allowed
   `,
}

function extend(values: Record<string, string>) {
   return { ...base, ...mapValues(values, (it, key) => `${base[key] ?? ''} ${it}`) }
}

const config: DefaultConfigOptions = {
   config: {
      classes: generateClasses({
         global: {
            outer: 'my-2',
            inner: innerFlex,
            label: 'block mb-1 ml-1 font-bold text-sm',
            help: 'text-xs text-gray-500',
            messages: 'list-none p-0 mt-1 mb-0',
            message: 'mb-1 text-xs text-red-500 dark:text-red-400',
            prefixIcon: icon,
            suffixIcon: icon,
         },
         text: extend({ input: 'h-8' }),
         number: extend({ input: 'h-8' }),
         date: extend({ input: 'h-8' }),
         textarea: extend({ input: 'resize-none' }),
         button,
         submit: button,
      }),
   },
   iconLoader: async iconName => {
      try {
         const response = await fetch(`https://cdn.jsdelivr.net/npm/heroicons/outline/${iconName}.svg`)
         const icon = await response.text()
         if (icon.startsWith('<svg')) return icon
      } catch {}
      console.warn(`Unable to find icon '${iconName}'`)
   },
}

export default config
