import formKitTailwind from '@formkit/themes/tailwindcss'
import { Config } from 'tailwindcss'
import colors from 'tailwindcss/colors'
import defaultTheme from 'tailwindcss/defaultTheme'
import { mapKeys, mapValues } from 'lodash-es'

const colorKeys = Object.keys(colors.red)
const reversedColorKeys = [...colorKeys].reverse()

function prefix<T extends object>(value: T, prefix: string) {
   return mapKeys(value, (_, key) => `${prefix}-${key}`)
}

function reverse<T extends object>(value: T) {
   return mapKeys(value, (_, key) => reversedColorKeys[colorKeys.indexOf(key)])
}

const config: Partial<Config> = {
   plugins: [formKitTailwind],
   content: ['config/formkit.config.ts'],
   theme: {
      extend: {
         colors: {
            solid: {
               ...mapValues(colors.red, (_, key) => `var(--solid-${key})`),
               ...prefix(colors.slate, 'dark'),
               ...prefix(reverse(colors.stone), 'light'),
               ...prefix(colors.stone, 'sepia'),
            },
            accent: {
               ...mapValues(colors.red, (_, key) => `var(--accent-${key})`),
               ...prefix(colors.rose, 'light'),
               ...prefix(colors.purple, 'dark'),
               ...prefix(colors.amber, 'sepia'),
            },
         },
         fontSize: {
            ...mapKeys(
               mapValues(defaultTheme.fontSize, ([size, options]) => {
                  return [size.replace('rem', 'em'), options] as [string, {}]
               }),
               (_, key) => `e-${key}`,
            ),
         },
         minWidth: {
            ...defaultTheme.spacing,
         },
         minHeight: {
            ...defaultTheme.spacing,
         },
      },
   },
}

export default config
