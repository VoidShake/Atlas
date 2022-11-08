import { generateClasses } from '@formkit/themes'
import { DefaultConfigOptions } from '@formkit/vue'

const base: Record<string, string> = {
   outer: 'mb-5',
   label: 'block mb-1 font-bold text-sm',
   inner: 'max-w-md p-2 rounded outline-0 transition ring-0 border-2 bg-solid-800 ring-accent-500 border-solid-700 overflow-hidden focus-within:ring-2',
   input: 'w-full px-3 border-none outline-none bg-transparent',
   help: 'text-xs text-gray-500',
}

function extend(values: Record<string, string>) {
   const entries = Object.keys(values).map(key => [key, `${base[key] ?? ''} ${values[key]}`])
   return { ...base, ...Object.fromEntries(entries) }
}

const config: DefaultConfigOptions = {
   config: {
      classes: generateClasses({
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
