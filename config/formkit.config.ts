import { generateClasses } from '@formkit/themes'
import { DefaultConfigOptions } from '@formkit/vue'
import { mapValues } from 'lodash-es'
import multi from '~/components/input/formkit/multi'

const inputBase: Record<string, string> = {
   inner: `
      p-2 rounded transition bg-solid-800 
      border-2 border-solid-700 ring-accent-500
      focus-within:ring-2
   `,
   input: 'w-full px-3 border-none outline-none bg-transparent h-8',
   prefixIcon: 'px-4 bg-solid-700',
   suffixIcon: 'px-4',
}

const innerFlex = 'flex items-center gap-1'
const icon = 'inline h-12 -m-2 py-4 px-2 align-stretch flex align-center'

const button = {
   input: `
      ${innerFlex}
      rounded select-none transition
      px-4 py-2 border-2 border-transparent
      bg-accent-600 ring-accent-400 ring-0 text-white
      hover:ring-2 hover:bg-accent-500
      disabled:bg-solid-600 disabled:opacity-75 disabled:ring-0 disabled:cursor-not-allowed
   `,
}

const checkbox = {
   fieldset: 'max-w-md border border-gray-400 rounded-md px-2 pb-1',
   legend: 'font-bold text-sm',
   wrapper: 'flex items-center mb-1 cursor-pointer',
   help: 'mb-2',
   input: 'form-check-input appearance-none h-5 w-5 mr-2 border border-gray-500 rounded-sm bg-white checked:bg-blue-500 focus:outline-none focus:ring-0 transition duration-200',
   label: 'text-sm text-gray-700 mt-1',
}

function extend(values: Record<string, string>) {
   return { ...inputBase, ...mapValues(values, (it, key) => `${inputBase[key] ?? ''} ${it}`) }
}

const config: DefaultConfigOptions = {
   inputs: { multi },
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
         text: inputBase,
         number: inputBase,
         date: inputBase,
         textarea: extend({ input: 'resize-none' }),
         select: extend({ option: 'bg-solid-800  select-none' }),
         multi: inputBase,
         button,
         submit: button,
         checkbox,
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
