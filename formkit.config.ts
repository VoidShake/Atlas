import { generateClasses } from '@formkit/themes'
import { DefaultConfigOptions } from '@formkit/vue'
import { mapValues } from 'lodash'

const base: Record<string, string> = {
   inner: 'p-2 rounded outline-0 transition ring-0 border-2 bg-solid-800 ring-accent-500 border-solid-700 overflow-hidden focus-within:ring-2',
   input: 'w-full px-3 border-none outline-none bg-transparent',
}

function extend(values: Record<string, string>) {
   return { ...base, ...mapValues(values, (it, key) => `${base[key] ?? ''} ${it}`) }
}

const config: DefaultConfigOptions = {
   config: {
      classes: generateClasses({
         global: {
            outer: 'my-2',
            label: 'block mb-1 ml-1 font-bold text-sm',
            help: 'text-xs text-gray-500',
            messages: 'list-none p-0 mt-1 mb-0',
            message: 'mb-1 text-xs text-red-500 dark:text-red-400',
         },
         text: extend({ input: 'h-10' }),
         textarea: extend({ input: 'resize-none' }),
         submit: {
            input: `
               rounded select-none transition
               py-2 px-3
               bg-accent-600 ring-accent-400 ring-0 text-white
               hover:ring-2 hover:bg-accent-500
               disabled:bg-solid-700 disabled:opacity-75 disabled:ring-0 disabled:cursor-not-allowed
            `,
         },
      }),
   },
}

export default config
