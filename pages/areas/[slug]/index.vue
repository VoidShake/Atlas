<template>
   <section>
      <LocationPage v-if="result" :location="result.area">
         <section class="content">
            <section>
               <StyledPanel v-for="tale in result.area.tales.nodes" :key="tale.id" class="mt-4">
                  <h3>{{ tale.title }}</h3>
                  <MarkdownPreview :value="tale.text" />
               </StyledPanel>
            </section>

            <MapView id="map" disable-controls :bounds="bounds">
               <MapAreaMarker :area="result.area" />
            </MapView>
         </section>
      </LocationPage>
   </section>
</template>

<script lang="ts" setup>
import { GetAreaDocument } from '~/graphql/generated'

const route = useRoute()

const { result } = useQuery(GetAreaDocument, () => ({
   slug: route.params.slug as string,
}))

const bounds = computed(() => result.value?.area.points && getBounds(result.value.area.points))

definePageMeta({
   layout: 'confined',
})
</script>

<style lang="scss" scoped>
.content {
   @apply grid gap-3;
   grid-template: 'text map' / 3fr 1fr;
}

#map {
   @apply mt-4;
   grid-area: map;
   aspect-ratio: 1 / 1;
}
</style>
