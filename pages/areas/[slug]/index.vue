<template>
   <section>
      <LocationPage v-if="result" :location="result.area">
         <StyledPanel v-for="tale in result.area.tales.nodes" :key="tale.id" class="mt-4">
            <h3>{{ tale.title }}</h3>
            <MarkdownPreview :value="tale.text" />
         </StyledPanel>
      </LocationPage>
   </section>
</template>

<script lang="ts" setup>
import { GetAreaDocument } from '~/graphql/generated'

const route = useRoute()

const { result } = useQuery(GetAreaDocument, () => ({
   slug: route.params.slug as string,
}))

definePageMeta({
   layout: 'confined',
})
</script>
