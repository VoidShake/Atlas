<template>
   <l-map
      v-model:zoom="zoom"
      v-model:center="center"
      zoom-animation
      fade-animation
      :crs="crs"
      :min-zoom="context?.minZoom"
      :max-zoom="context?.maxZoom"
      :max-native-zoom="context?.maxNativeZoom"
      @ready="ready"
      @contextmenu="emitWithPos('contextmenu', $event)"
      @click="emitWithPos('click', $event)"
   >
      <MapTiles />
      <MapLocations />
   </l-map>
</template>

<script lang="ts" setup>
import { LMap } from '@vue-leaflet/vue-leaflet'
import { CRS, LeafletMouseEvent, Map } from 'leaflet'
import { PosFragment } from '~/graphql/generated'

const emit = defineEmits<{
   (e: 'click', pos: PosFragment, event: LeafletMouseEvent): void
   (e: 'contextmenu', pos: PosFragment, event: LeafletMouseEvent): void
}>()

function emitWithPos(e: 'click' | 'contextmenu', event: LeafletMouseEvent | PointerEvent) {
   if ('latlng' in event) {
      emit(e as any, toWorldPos(context.value!.map, event.latlng), event)
   }
}

const context = useMap()

const crs = CRS.Simple
const zoom = useState('zoom', () => 0)
const center = useState('center', () => toMapPos(context.value!.map, context.value!.world.center))

// const bounds = [
//    [-64, 531],
//    [-704, -110],
// ]

function ready(map: Map) {
   // map.fitBounds(bounds)
   // console.log(map.getBounds())
}

const background = computed(() => {
   return context.value?.map.background ?? 'black'
})
</script>

<style>
.leaflet-container {
   background: v-bind('background');
}

img.leaflet-tile {
   image-rendering: pixelated;
}
</style>
