<template>
   <section v-if="result">
      <FormCreateLocation :initial="result?.locationDraft">
         <template #buttons="{ valid, value }">
            <FormKit type="submit" :disabled="!valid" @click.prevent="modify(value)"> Save </FormKit>
         </template>
      </FormCreateLocation>
   </section>
</template>

<script lang="ts" setup>
import { ModifyLocationDraftDocument, GetLocationDraftDocument, ModifyLocationInput } from '~~/graphql/generated'

const router = useRouter()
const route = useRoute()

const { result } = useQuery(GetLocationDraftDocument, () => ({ id: Number.parseInt(route.params.id as string) }))
const { mutate } = useMutation(ModifyLocationDraftDocument, { refetchQueries: ['getLocationDraft'] })

async function modify(input: ModifyLocationInput) {
   if (!result.value) return
   const response = await mutate({ id: result.value.locationDraft.id, input })
   const data = response?.data
   if (data) router.push(`/me/drafts/locations/${data.modified.id}`)
}

definePageMeta({
   layout: 'confined',
})
</script>
