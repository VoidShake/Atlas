import { Config } from 'tailwindcss'
import colors from 'tailwindcss/colors'
import defaultTheme from 'tailwindcss/defaultTheme'

const colorKeys = Object.keys(colors.red)
const reversedColorKeys = [...colorKeys].reverse()

function mapKeys<T extends object, R extends string>(value: T, mapper: (value: T[keyof T], key: keyof T) => R) {
   const entries = Object.entries(value).map(([key, value]) => [mapper(value, key as keyof T), value])
   return Object.fromEntries(entries) as Record<R, T[keyof T]>
}

function mapValues<T extends object, R>(value: T, mapper: (value: T[keyof T], key: keyof T) => R) {
   const entries = Object.entries(value).map(([key, value]) => [key, mapper(value, key as keyof T)])
   return Object.fromEntries(entries) as Record<keyof T, R>
}

function prefix<T extends object>(value: T, prefix: string) {
   return mapKeys(value, (_, key) => `${prefix}-${key}`)
}

function reverse<T extends object>(value: T) {
   return mapKeys(value, (_, key) => reversedColorKeys[colorKeys.indexOf(key)])
}

const config: Partial<Config> = {
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
      },
   },
}

export default config
