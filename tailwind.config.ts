import { mapKeys, mapValues } from 'lodash'
import { Config } from 'tailwindcss'
import defaultTheme from 'tailwindcss/defaultTheme'

export default <Omit<Config, 'content'>>{
   theme: {
      extend: {
         fontSize: {
            ...mapKeys(
               mapValues(defaultTheme.fontSize, ([size, options]) => {
                  return [size.replace('rem', 'em'), options]
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
