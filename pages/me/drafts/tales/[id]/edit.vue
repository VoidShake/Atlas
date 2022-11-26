<template>
   <section v-if="result">
      <FormCreateTale :initial="result.taleDraft" :initial-places="initialPlaces">
         <template #buttons="{ valid, value }">
            <FormKit type="submit" :disabled="!valid" @click.prevent="modify(value)"> Save </FormKit>
         </template>
      </FormCreateTale>
   </section>
</template>

<script lang="ts" setup>
import { ModifyTaleDraftDocument, GetTaleDraftDocument } from '~~/graphql/generated'

const router = useRouter()
const route = useRoute()

const { result } = useQuery(GetTaleDraftDocument, () => ({ id: Number.parseInt(route.params.id as string) }))

const { modify, initialPlaces } = useModifyTale(
   computed(() => result.value?.taleDraft),
   ModifyTaleDraftDocument,
   it => router.push(`/me/drafts/tales/${it.modified.id}`),
)

definePageMeta({
   layout: 'confined',
})
</script>
