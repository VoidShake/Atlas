<template>
   <section>
      <FormKit v-slot="{ value, state: { valid } }" type="form" :actions="false" :errors="errors">
         <FormKit name="world" validation="required" type="hidden" :value="initial?.pos?.world ?? 'overworld'" />

         <FormKit name="name" :value="initial?.name" validation="required" label="Name" type="text" />

         <div class="grid grid-flow-col gap-4">
            <FormKit name="minY" label="Min-Y" type="number" step="1" :value="-64" />
            <FormKit name="maxY" label="Max-Y" type="number" step="1" :value="320" />
         </div>

         <InputArea :initial="initial?.points" />

         <div id="buttons">
            <slot name="buttons" :valid="valid" :value="value">
               <FormKit v-if="!onlyDraft" type="submit" :disabled="!valid" @click.prevent="save(value, false)" />
               <FormKit
                  type="submit"
                  :disabled="!valid"
                  :classes="{ input: 'bg-solid-600' }"
                  @click.prevent="save(value, true)"
               >
                  Save as Draft
               </FormKit>
            </slot>
         </div>
      </FormKit>
   </section>
</template>

<script lang="ts" setup>
import {
   CreateAreaDocument,
   CreateAreaDraftDocument,
   Permission,
   type AbstractArea,
   type CreateAreaDraftMutation,
   type CreateAreaInput,
   type CreateAreaMutation,
} from '~~/graphql/generated'

const { hasPermission } = useSession()
const { query } = useRoute()

const onlyDraft = computed(() => {
   if ('draft' in query) return true
   return !hasPermission(Permission.CreateLocation)
})

const emit = defineEmits<{
   (e: 'saved', data: CreateAreaMutation | CreateAreaDraftMutation): void
}>()

defineProps<{
   updateId?: number
   initial?: Partial<AbstractArea>
}>()

const refetchQueries = ['getArea', 'getAreas']
const { mutate: createArea, error } = useMutation(CreateAreaDocument, { refetchQueries })
const { mutate: createAreaDraft, error: draftError } = useMutation(CreateAreaDraftDocument, { refetchQueries })
const errors = computed(() =>
   [error, draftError]
      .map(it => it.value)
      .filter(notNull)
      .flatMap(extractMessages),
)

async function save(input: CreateAreaInput, draft: boolean) {
   const create = draft ? createAreaDraft : createArea
   const response = await create({ input })
   const data = response?.data
   if (data) emit('saved', data)
}
</script>

<style lang="scss" scoped>
form {
   #buttons {
      @apply flex gap-2;
   }
}
</style>
