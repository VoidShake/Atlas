<template>
   <section>
      <LocationPage v-if="result" :location="result.location">
         <StyledPanel v-for="tale in result.location.tales.nodes" :key="tale.id" class="mt-4">
            <h3>{{ tale.title }}</h3>
            <MarkdownPreview :value="tale.text" />
         </StyledPanel>
      </LocationPage>
   </section>
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
