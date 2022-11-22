<template>
   <section>
      <FormKit v-slot="{ value, state: { valid } }" type="form" :actions="false" :errors="errors">
         <FormKit name="title" :value="initial?.title" validation="required" label="Title" type="text" />

         <InputLocation name="locations" :value="initialLocations" />

         <MarkdownEditor name="text" :value="initial?.text" label="Text" validation="required" />

         <div id="buttons">
            <slot name="buttons" :valid="valid" :value="value as CreateTaleInput">
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
import { DeepPartial } from 'ts-essentials'
import {
   AbstractTale,
   CreateTaleDocument,
   CreateTaleDraftDocument,
   CreateTaleDraftMutation,
   CreateTaleInput,
   CreateTaleMutation,
   Permission,
} from '~~/graphql/generated'

const { hasPermission } = useSession()
const { query } = useRoute()

const onlyDraft = computed(() => {
   if ('draft' in query) return true
   return !hasPermission(Permission.TellTale)
})

const emit = defineEmits<{
   (e: 'saved', data: CreateTaleMutation | CreateTaleDraftMutation): void
}>()

defineProps<{
   initial?: DeepPartial<AbstractTale>
   initialLocations?: number[]
}>()

const refetchQueries = ['getLocation']
const { mutate: createTale, error } = useMutation(CreateTaleDocument, { refetchQueries })
const { mutate: createTaleDraft, error: draftError } = useMutation(CreateTaleDraftDocument, { refetchQueries })
const errors = computed(() =>
   [error, draftError]
      .map(it => it.value)
      .filter(notNull)
      .flatMap(extractMessages),
)

async function save(input: CreateTaleInput, draft: boolean) {
   const create = draft ? createTaleDraft : createTale
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
