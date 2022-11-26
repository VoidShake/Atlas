<template>
   <section v-if="result">
      <FormCreateTale :initial="result.tale" :intial-locations="initialLocations">
         <template #buttons="{ valid, value }">
            <FormKit type="submit" :disabled="!valid" @click.prevent="modify(value)"> Save </FormKit>
         </template>
      </FormCreateTale>
   </section>
</template>

<script lang="ts" setup>
import { difference } from 'lodash-es'
import { ModifyTaleDocument, GetTaleDocument, CreateTaleInput } from '~~/graphql/generated'

const router = useRouter()
const route = useRoute()

const { result } = useQuery(GetTaleDocument, () => ({ id: Number.parseInt(route.params.id as string) }))
const { mutate } = useMutation(ModifyTaleDocument, { refetchQueries: ['getTale'] })

const initialLocations = computed(() => result.value?.tale.locations)

async function modify({ places, ...input }: CreateTaleInput) {
   if (!result.value || !initialLocations.value) return

   const initialPlaces = initialLocations.value.filter(it => it.__typename === 'Place').map(it => it.id)
   const removedPlaces = difference(initialPlaces, places ?? [])
   const addedPlaces = difference(places, initialPlaces)

   const response = await mutate({ id: result.value.tale.id, input, addedPlaces, removedPlaces })

   const data = response?.data
   if (data) router.push(`/library/${data.modified.id}`)
}

definePageMeta({
   layout: 'confined',
})
</script>
