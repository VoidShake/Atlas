<template>
   <section v-if="result">
      <FormCreateLocation :initial="result?.location">
         <template #buttons="{ valid, value }">
            <FormKit type="submit" :disabled="!valid" @click.prevent="modify(value)"> Save </FormKit>
         </template>
      </FormCreateLocation>
   </section>
</template>

<script lang="ts" setup>
import { ModifyLocationDocument, GetLocationDocument, ModifyLocationInput } from '~~/graphql/generated'

const router = useRouter()
const route = useRoute()

const { result } = useQuery(GetLocationDocument, () => ({ slug: route.params.slug as string }))
const { mutate } = useMutation(ModifyLocationDocument, { refetchQueries: ['getLocation'] })

async function modify(input: ModifyLocationInput) {
   if (!result.value) return
   const response = await mutate({ id: result.value.location.id, input })
   const data = response?.data
   if (data) router.push(`/locations/${data.modified.slug}`)
}

definePageMeta({
   layout: 'confined',
})
</script>
