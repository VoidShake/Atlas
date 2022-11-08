<template>
   <section>
      <FormKit type="form" :actions="false" #default="{ value, state: { valid } }" :errors="errors">
         <FormKit name="title" validation="required" label="Title" type="text" />

         <StyledLocationSelection v-model="locations" />

         <MarkdownEditor name="text" label="Text" validation="required" />

         <div id="buttons">
            <FormKit v-if="!onlyDraft" type="submit" :disabled="!valid" @click.prevent="test(value, false)" />
            <FormKit
               type="submit"
               :disabled="!valid"
               @click.prevent="test(value, true)"
               :classes="{ input: 'bg-solid-600' }"
            >
               Save as Draft
            </FormKit>
         </div>
      </FormKit>
   </section>
</template>

<script lang="ts" setup>
import {
   CreateTaleDocument,
   CreateTaleDraftDocument,
   CreateTaleInput,
   CreateTaleMutation,
   Permission,
} from '~~/graphql/generated'

const { hasPermission } = useSession()
const { query } = useActiveRoute()

const onlyDraft = computed(() => {
   if ('draft' in query) return true
   return !hasPermission(Permission.TellTale)
})

const emit = defineEmits<{
   (e: 'saved', data: CreateTaleMutation, draft: boolean): void
}>()

const props = defineProps<{
   initialLocations?: number[]
}>()

const locations = useState<number[]>('linked-locations', () => props.initialLocations ?? [])

const refetchQueries = ['getLocation']
const { mutate: createTale, error } = useMutation(CreateTaleDocument, { refetchQueries })
const { mutate: createTaleDraft, error: draftError } = useMutation(CreateTaleDraftDocument, { refetchQueries })
const errors = computed(() =>
   [error, draftError]
      .map(it => it.value)
      .filter(notNull)
      .flatMap(extractMessages),
)

async function test(input: CreateTaleInput, draft: boolean) {
   const create = draft ? createTaleDraft : createTale
   const response = await create({ input, locations: locations.value })
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
