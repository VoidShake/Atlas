<template>
   <section v-if="result">
      <FormCreatePlace :initial="result?.placeDraft">
         <template #buttons="{ valid, value }">
            <FormKit type="submit" :disabled="!valid" @click.prevent="modify(value)"> Save </FormKit>
         </template>
      </FormCreatePlace>
   </section>
</template>

<script lang="ts" setup>
import { GetPlaceDraftDocument, ModifyPlaceDraftDocument, type ModifyPlaceInput } from '~~/graphql/generated';

const router = useRouter()
const route = useRoute()

const { result } = useQuery(GetPlaceDraftDocument, () => ({ id: Number.parseInt(route.params.id as string) }))
const { mutate } = useMutation(ModifyPlaceDraftDocument, { refetchQueries: ['getPlaceDraft'] })

async function modify(input: ModifyPlaceInput) {
   if (!result.value) return
   const response = await mutate({ id: result.value.placeDraft.id, input })
   const data = response?.data
   if (data) router.push(`/me/drafts/places/${data.modified.id}`)
}

definePageMeta({
   layout: 'confined',
})
</script>
