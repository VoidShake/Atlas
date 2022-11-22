import { FormKitTypeDefinition } from '@formkit/core'
import { createInput } from '@formkit/vue'
import MultiSelect from '~~/inputs/MultiSelect.vue'

const multi: FormKitTypeDefinition = createInput(MultiSelect, {
   props: ['placeholder', 'mode', 'options', 'loading'],
   forceTypeProp: 'multi',
})

export default multi
