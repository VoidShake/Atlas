<template>
   <div>
      <template v-if="result">
         <h1>{{ result.taleDraft.title }}</h1>
         <p>
            <Pill v-for="location of result.taleDraft.locations.nodes" :key="location.id">
               <span> {{ location.name }} </span>
               <template #icon>
                  <map-pin-icon />
               </template>
            </Pill>
         </p>
         <MarkdownPreview :value="result.taleDraft.text" />
      </template>
   </div>
</template>

<script lang="ts" setup>
import { MapPinIcon } from '@heroicons/vue/24/solid'
import { GetTaleDraftDocument } from '~/graphql/generated'

const route = useActiveRoute()

const { result } = useQuery(GetTaleDraftDocument, () => ({
   id: Number.parseInt(route.params.id as string),
}))

definePageMeta({
   layout: 'confined',
})
</script>
