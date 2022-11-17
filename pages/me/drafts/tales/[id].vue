<template>
   <section>
      <TalePage v-if="result" :tale="result.taleDraft">
         <template v-if="result.taleDraft.proposed" #title>
            <Pill class="text-sm"> Proposed </Pill>
         </template>
         <ActionButton v-if="!result.taleDraft.proposed" @click="propose">
            <PaperAirplaneIcon />
         </ActionButton>
      </TalePage>
   </section>
</template>

<script lang="ts" setup>
import { PaperAirplaneIcon } from '@heroicons/vue/24/solid'
import { GetTaleDraftDocument, ProposeTaleDocument } from '~/graphql/generated'

const route = useRoute()
const id = computed(() => Number.parseInt(route.params.id as string))

const { result } = useQuery(GetTaleDraftDocument, () => ({
   id: id.value,
}))

const { mutate: propose } = useMutation(ProposeTaleDocument, () => ({
   variables: { draft: id.value },
   refetchQueries: ['getTaleDraft'],
}))

definePageMeta({
   layout: 'confined',
})
</script>
