<template>
   <SidePanel>
      <template #title>{{ result?.area.name }}</template>
      <template v-if="result">
         <StyledPanel v-for="tale of result.area.tales.nodes" :key="tale.id" class="tale">
            <h3>
               <NuxtLink class="hover:underline underline-offset-4" :to="`/library/${tale.id}`">
                  {{ tale.title }}
                  <InlineIcon> <ArrowTopRightOnSquareIcon class="scale-75" /> </InlineIcon>
               </NuxtLink>
            </h3>
            <MarkdownPreview :value="tale.text" />
         </StyledPanel>
      </template>
      <p v-else>Loading...</p>
   </SidePanel>
</template>

<script lang="ts" setup>
import { ArrowTopRightOnSquareIcon } from '@heroicons/vue/24/solid'
import { GetAreaDocument } from '~/graphql/generated'

const route = useRoute()

const { result } = useQuery(GetAreaDocument, () => ({
   slug: route.params.slug as string,
}))

definePageMeta({
   layout: 'map',
})
</script>

<style scoped>
.tale:not(:last-child) {
   @apply mb-4;
}
</style>
