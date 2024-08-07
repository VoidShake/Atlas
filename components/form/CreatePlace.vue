<template>
   <section>
      <FormKit v-slot="{ value, state: { valid } }" type="form" :actions="false" :errors="errors">
         <FormKit name="world" validation="required" type="hidden" :value="initial?.pos?.world ?? 'overworld'" />

         <FormKit name="name" :value="initial?.name" validation="required" label="Name" type="text" />

         <InputIcon :initial="initial?.icon" />

         <InputPos :initial="initial?.pos" :show-map="!hideMap" />

         <div id="buttons">
            <slot name="buttons" :valid="valid" :value="value">
               <FormKit v-if="!onlyDraft" type="submit" :disabled="!valid" @click.prevent="save(value, false)" />
               <FormKit type="submit" :disabled="!valid" :classes="{ input: 'bg-solid-600' }"
                  @click.prevent="save(value, true)">
                  Save as Draft
               </FormKit>
            </slot>
         </div>
      </FormKit>
   </section>
</template>

<script lang="ts" setup>
import type { DeepPartial } from 'ts-essentials';
import {
   CreatePlaceDocument,
   CreatePlaceDraftDocument,
   Permission,
   type AbstractPlace,
   type CreatePlaceDraftMutation,
   type CreatePlaceInput,
   type CreatePlaceMutation,
} from '~~/graphql/generated';

const { hasPermission } = useSession()
const { query } = useRoute()

const onlyDraft = computed(() => {
   if ('draft' in query) return true
   return !hasPermission(Permission.CreateLocation)
})

const emit = defineEmits<{
   (e: 'saved', data: CreatePlaceMutation | CreatePlaceDraftMutation): void
}>()

defineProps<{
   updateId?: number
   initial?: DeepPartial<AbstractPlace>
   hideMap?: boolean
}>()

const refetchQueries = ['getPlace', 'getPlaces']
const { mutate: createPlace, error } = useMutation(CreatePlaceDocument, { refetchQueries })
const { mutate: createPlaceDraft, error: draftError } = useMutation(CreatePlaceDraftDocument, { refetchQueries })
const errors = computed(() =>
   [error, draftError]
      .map(it => it.value)
      .filter(notNull)
      .flatMap(extractMessages),
)

async function save(input: CreatePlaceInput, draft: boolean) {
   const create = draft ? createPlaceDraft : createPlace
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
