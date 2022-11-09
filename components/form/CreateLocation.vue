<template>
   <section>
      <FormKit v-slot="{ value, state: { valid } }" type="form" :actions="false" :errors="errors">
         <FormKit name="world" validation="required" type="hidden" value="overworld" />

         <InputPos :initial="initialPos" />

         <FormKit name="name" validation="required" label="Name" type="text" />

         <div id="buttons">
            <FormKit v-if="!onlyDraft" type="submit" :disabled="!valid" @click.prevent="save(value, false)" />
            <FormKit
               type="submit"
               :disabled="!valid"
               :classes="{ input: 'bg-solid-600' }"
               @click.prevent="save(value, true)"
            >
               Save as Draft
            </FormKit>
         </div>
      </FormKit>
   </section>
</template>

<script lang="ts" setup>
import {
   CreateLocationDocument,
   CreateLocationDraftDocument,
   CreateLocationInput,
   CreateLocationMutation,
   Permission,
   PosFragment,
} from '~~/graphql/generated'

const { hasPermission } = useSession()
const { query } = useActiveRoute()

const onlyDraft = computed(() => {
   if ('draft' in query) return true
   return !hasPermission(Permission.CreateLocation)
})

const emit = defineEmits<{
   (e: 'saved', data: CreateLocationMutation, draft: boolean): void
}>()

defineProps<{
   initialPos?: PosFragment
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
   if (data) emit('saved', data, draft)
}
</script>

<style lang="scss" scoped>
form {
   #buttons {
      @apply flex gap-2;
   }
}
</style>
