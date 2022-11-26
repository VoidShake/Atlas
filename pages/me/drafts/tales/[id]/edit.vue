<template>
   <section v-if="result">
      <FormCreateTale :initial="result.taleDraft" :intial-places="initialLocations">
         <template #buttons="{ valid, value }">
            <FormKit type="submit" :disabled="!valid" @click.prevent="modify(value)"> Save </FormKit>
         </template>
      </FormCreateTale>
   </section>
</template>

<script lang="ts" setup>
import { difference } from 'lodash-es'
import { ModifyTaleDraftDocument, GetTaleDraftDocument, CreateTaleInput } from '~~/graphql/generated'

const router = useRouter()
const route = useRoute()

const { result } = useQuery(GetTaleDraftDocument, () => ({ id: Number.parseInt(route.params.id as string) }))
const { mutate } = useMutation(ModifyTaleDraftDocument, { refetchQueries: ['getTaleDraft'] })

const initialLocations = computed(() => result.value?.taleDraft.locations.nodes.map(it => it.id))

async function modify({ locations, ...input }: CreateTaleInput) {
   if (!result.value || !initialLocations.value) return

   const removedLocations = difference(initialLocations.value, locations ?? [])
   const addedLocations = difference(locations, initialLocations.value)

   const response = await mutate({ id: result.value.taleDraft.id, input, addedLocations, removedLocations })

   const data = response?.data
   if (data) router.push(`/me/drafts/tales/${data.modified.id}`)
}

definePageMeta({
   layout: 'confined',
})
</script>
