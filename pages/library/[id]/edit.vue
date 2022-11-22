<template>
   <section v-if="result">
      <FormCreateTale :initial="result.tale" :initial-locations="initialLocations">
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

const initialLocations = computed(() => result.value?.tale.locations.nodes.map(it => it.id))

async function modify({ locations, ...input }: CreateTaleInput) {
   if (!result.value || !initialLocations.value) return

   const removedLocations = difference(initialLocations.value, locations ?? [])
   const addedLocations = difference(locations, initialLocations.value)

   const response = await mutate({ id: result.value.tale.id, input, addedLocations, removedLocations })

   const data = response?.data
   if (data) router.push(`/library/${data.modified.id}`)
}

definePageMeta({
   layout: 'confined',
})
</script>
