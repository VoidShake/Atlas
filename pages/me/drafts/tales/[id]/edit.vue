<template>
   <section v-if="result">
      <FormCreateTale :initial="result.taleDraft" :initial-locations="initialLocations">
         <template #buttons="{ valid, value, locations }">
            <FormKit type="submit" :disabled="!valid" @click.prevent="modify(value, locations)"> Save </FormKit>
         </template>
      </FormCreateTale>
   </section>
</template>

<script lang="ts" setup>
import { difference } from 'lodash-es'
import { ModifyTaleDraftDocument, GetTaleDraftDocument, ModifyTaleInput } from '~~/graphql/generated'

const router = useRouter()
const route = useRoute()

const { result } = useQuery(GetTaleDraftDocument, () => ({ id: Number.parseInt(route.params.id as string) }))
const { mutate } = useMutation(ModifyTaleDraftDocument, { refetchQueries: ['getTaleDraft'] })

const initialLocations = computed(() => result.value?.taleDraft.locations.nodes.map(it => it.id))

async function modify(input: ModifyTaleInput, locations: number[]) {
   if (!result.value || !initialLocations.value) return

   const removedLocations = difference(initialLocations.value, locations)
   const addedLocations = difference(locations, initialLocations.value)

   const response = await mutate({ id: result.value.taleDraft.id, input, addedLocations, removedLocations })

   const data = response?.data
   if (data) router.push(`/me/drafts/tales/${data.modified.id}`)
}

definePageMeta({
   layout: 'confined',
})
</script>
