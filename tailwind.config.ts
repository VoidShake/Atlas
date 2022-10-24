import { mapKeys, mapValues } from 'lodash'
import { Config } from 'tailwindcss'
import defaultTheme from 'tailwindcss/defaultTheme'

const config: Partial<Config> = {
   theme: {
      extend: {
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
