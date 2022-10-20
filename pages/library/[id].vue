<template>
   <div>
      <template v-if="result">
         <h1>{{ result.tale.title }}</h1>
         <p>
            <Pill v-for="location of result.tale.locations.nodes" :key="location.id">
               <span> {{ location.name }} </span>
               <template #icon>
                  <map-pin-icon />
               </template>
            </Pill>
         </p>
         <MarkdownPreview :value="result.tale.text" />
      </template>
   </div>
</template>

<script lang="ts" setup>
import { MapPinIcon } from '@heroicons/vue/24/solid'
import { GetTaleDocument } from '~/graphql/generated'

const route = useActiveRoute()

const { result } = useQuery(GetTaleDocument, () => ({
   id: Number.parseInt(route.params.id as string),
}))

definePageMeta({
   layout: 'confined',
})
</script>
