<template>
   <section>
      <LocationPage v-if="result" :location="result.place">
         <section class="content">
            <section>
               <StyledPanel v-for="tale in result.place.tales.nodes" :key="tale.id" class="mt-4">
                  <h3>{{ tale.title }}</h3>
                  <MarkdownPreview :value="tale.text" />
               </StyledPanel>
            </section>

            <MapView :center="result.place.pos" :zoom="8" disable-controls>
               <MapPlaceMarker :place="result.place" />
            </MapView>
         </section>
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

<style lang="scss" scoped>
.content {
   @apply grid gap-3;
   grid-template: 'text map' / 3fr 1fr;
}

#map-wrap {
   @apply mt-4;
   grid-area: map;
   aspect-ratio: 1 / 1;
}
</style>
