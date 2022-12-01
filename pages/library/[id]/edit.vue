<template>
   <section v-if="result">
      <FormCreateTale :initial="result.tale" :initial-places="initialPlaces">
         <template #buttons="{ valid, value }">
            <FormKit type="submit" :disabled="!valid" @click.prevent="modify(value)"> Save </FormKit>
         </template>
      </FormCreateTale>
   </section>
</template>

<script lang="ts" setup>
import { ModifyTaleDocument, GetTaleDocument } from '~~/graphql/generated'

const router = useRouter()
const route = useRoute()

const { result } = useQuery(GetTaleDocument, () => ({ id: Number.parseInt(route.params.id as string) }))

const { modify, initialPlaces } = useModifyTale(
   computed(() => result.value?.tale),
   ModifyTaleDocument,
   it => router.push(`/library/${it.modified.id}`),
)

definePageMeta({
   layout: 'confined',
})
</script>
