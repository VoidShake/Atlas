<template>
   <section>
      <LocationPage v-if="result" :location="result.placeDraft">
         <template v-if="result.placeDraft.proposed" #title>
            <Pill class="text-sm"> Proposed </Pill>
         </template>
         <ActionButton v-if="!result.placeDraft.proposed" @click="propose">
            <PaperAirplaneIcon />
         </ActionButton>
      </LocationPage>
   </section>
</template>

<script lang="ts" setup>
import { PaperAirplaneIcon } from '@heroicons/vue/24/solid'
import { GetPlaceDraftDocument, ProposePlaceDocument } from '~/graphql/generated'

const route = useRoute()
const id = computed(() => Number.parseInt(route.params.id as string))

const { result } = useQuery(GetPlaceDraftDocument, () => ({
   id: id.value,
}))

const { mutate: propose } = useMutation(ProposePlaceDocument, () => ({
   variables: { draft: id.value },
   refetchQueries: ['getPlaceDraft'],
}))

definePageMeta({
   layout: 'confined',
})
</script>
