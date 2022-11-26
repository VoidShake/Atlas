<template>
   <section>
      <LocationPage v-if="result" :location="result.place">
         <StyledPanel v-for="tale in result.place.tales.nodes" :key="tale.id" class="mt-4">
            <h3>{{ tale.title }}</h3>
            <MarkdownPreview :value="tale.text" />
         </StyledPanel>
      </LocationPage>
   </section>
</template>

<script lang="ts" setup>
import { GetPlaceDocument } from '~/graphql/generated'

const route = useRoute()

const { result } = useQuery(GetPlaceDocument, () => ({
   slug: route.params.slug as string,
}))

definePageMeta({
   layout: 'confined',
})
</script>
