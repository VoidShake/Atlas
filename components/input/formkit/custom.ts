import type { FormKitTypeDefinition } from '@formkit/core'
import { createInput } from '@formkit/vue'
import IconSelect from './IconSelect.vue'
import MultiSelect from './MultiSelect.vue'

export const multi: FormKitTypeDefinition = createInput(MultiSelect, {
   props: ['placeholder', 'mode', 'options', 'loading'],
   forceTypeProp: 'multi',
})

export const icon: FormKitTypeDefinition = createInput(IconSelect, {
   props: ['placeholder'],
   forceTypeProp: 'icon',
})
