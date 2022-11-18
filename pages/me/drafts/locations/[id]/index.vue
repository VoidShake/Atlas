<template>
   <section>
      <LocationPage v-if="result" :location="result.locationDraft">
         <template v-if="result.locationDraft.proposed" #title>
            <Pill class="text-sm"> Proposed </Pill>
         </template>
         <ActionButton v-if="!result.locationDraft.proposed" @click="propose">
            <PaperAirplaneIcon />
         </ActionButton>
      </LocationPage>
   </section>
</template>

<script lang="ts" setup>
import { PaperAirplaneIcon } from '@heroicons/vue/24/solid'
import { GetLocationDraftDocument, ProposeLocationDocument } from '~/graphql/generated'

const route = useRoute()
const id = computed(() => Number.parseInt(route.params.id as string))

const { result } = useQuery(GetLocationDraftDocument, () => ({
   id: id.value,
}))

const { mutate: propose } = useMutation(ProposeLocationDocument, () => ({
   variables: { draft: id.value },
   refetchQueries: ['getLocationDraft'],
}))

definePageMeta({
   layout: 'confined',
})
</script>
