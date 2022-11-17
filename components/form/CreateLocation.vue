<template>
   <section>
      <FormKit v-slot="{ value, state: { valid } }" type="form" :actions="false" :errors="errors">
         <FormKit name="world" validation="required" type="hidden" :value="initial?.pos?.world ?? 'overworld'" />

         <InputPos :initial="initial?.pos" />

         <FormKit name="name" :value="initial?.name" validation="required" label="Name" type="text" />

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
import { DeepPartial } from 'ts-essentials'
import {
   CreateLocationDocument,
   CreateLocationDraftDocument,
   CreateLocationDraftMutation,
   CreateLocationInput,
   CreateLocationMutation,
   Permission,
   Location,
} from '~~/graphql/generated'

const { hasPermission } = useSession()
const { query } = useRoute()

const onlyDraft = computed(() => {
   if ('draft' in query) return true
   return !hasPermission(Permission.CreateLocation)
})

const emit = defineEmits<{
   (e: 'saved', data: CreateLocationMutation | CreateLocationDraftMutation): void
}>()

defineProps<{
   updateId?: number
   initial?: DeepPartial<Location>
}>()

const refetchQueries = ['getLocation', 'getLocations']
const { mutate: createLocation, error } = useMutation(CreateLocationDocument, { refetchQueries })
const { mutate: createLocationDraft, error: draftError } = useMutation(CreateLocationDraftDocument, { refetchQueries })
const errors = computed(() =>
   [error, draftError]
      .map(it => it.value)
      .filter(notNull)
      .flatMap(extractMessages),
)

async function save(input: CreateLocationInput, draft: boolean) {
   const create = draft ? createLocationDraft : createLocation
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
