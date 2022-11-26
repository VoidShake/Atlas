<template>
   <section v-if="result">
      <FormCreatePlace :initial="result?.place">
         <template #buttons="{ valid, value }">
            <FormKit type="submit" :disabled="!valid" @click.prevent="modify(value)"> Save </FormKit>
         </template>
      </FormCreatePlace>
   </section>
</template>

<script lang="ts" setup>
import { ModifyPlaceDocument, GetPlaceDocument, ModifyPlaceInput } from '~~/graphql/generated'

const router = useRouter()
const route = useRoute()

const { result } = useQuery(GetPlaceDocument, () => ({ slug: route.params.slug as string }))
const { mutate } = useMutation(ModifyPlaceDocument, { refetchQueries: ['getPlace'] })

async function modify(input: ModifyPlaceInput) {
   if (!result.value) return
   const response = await mutate({ id: result.value.place.id, input })
   const data = response?.data
   if (data) router.push(`/places/${data.modified.slug}`)
}

definePageMeta({
   layout: 'confined',
})
</script>
