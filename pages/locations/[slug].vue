<template>
   <div>
      <template v-if="result">
         <h1>{{ result.location.name }}</h1>
         <PosDisplay v-bind="result.location.pos" />
         <StyledPanel v-for="tale in result.location.tales.nodes" :key="tale.id" class="mt-4">
            <h3>{{ tale.title }}</h3>
            <MarkdownPreview :value="tale.text" />
         </StyledPanel>
      </template>
   </div>
</template>

<script lang="ts" setup>
import { GetLocationDocument } from '~/graphql/generated'

const route = useActiveRoute()

const { result } = useQuery(GetLocationDocument, () => ({
   slug: route.params.slug as string,
}))

definePageMeta({
   layout: 'confined',
})
</script>
