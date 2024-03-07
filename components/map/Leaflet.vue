<template>
   <l-map :zoom="zoom ?? 0" :center="initialCenter" zoom-animation fade-animation :crs="crs"
      :min-zoom="context?.minZoom!" :max-zoom="context?.maxZoom!" :max-native-zoom="context?.maxNativeZoom"
      :options="options" @ready="ready">
      <MapTiles />
      <MapLocations />
   </l-map>
</template>

<script lang="ts" setup>
import { LMap } from '@vue-leaflet/vue-leaflet';
import { CRS, Map, type LeafletMouseEvent } from 'leaflet';
import type { PosFragment } from '~/graphql/generated';

const props = defineProps<{
   center?: PosFragment
   zoom?: number
   disableControls?: boolean
}>()

const emit = defineEmits<{
   (e: 'click', pos: PosFragment, event: LeafletMouseEvent): void
   (e: 'contextmenu', pos: PosFragment, event: LeafletMouseEvent): void
}>()

function ready(map: Map) {
   map.on('contextmenu', e => emitWithPos('contextmenu', e))
   map.on('click', e => emitWithPos('click', e))
}

function emitWithPos(e: 'click' | 'contextmenu', event: LeafletMouseEvent | PointerEvent) {
   if ('latlng' in event) {
      emit(e as any, toWorldPos(context.value!.map, event.latlng), event)
   }
}

const context = useMap()

function mapPos(pos: PosFragment) {
   return toMapPos(context.value!.map, pos)
}

const crs = CRS.Simple
const initialCenter = computed(() => mapPos(props.center ?? context.value!.world.center))

const options = computed(() => ({
   zoomControl: !props.disableControls,
   dragging: !props.disableControls,
   doubleClickZoom: !props.disableControls,
   boxZoom: !props.disableControls,
   keyboard: !props.disableControls,
   scrollWheelZoom: !props.disableControls,
   touchZoom: !props.disableControls,
}))

const background = computed(() => {
   return context.value?.map.background ?? 'black'
})
</script>

<style>
.leaflet-container {
   @apply rounded-lg overflow-hidden;
   background: v-bind('background');
}

img.leaflet-tile {
   image-rendering: pixelated;
}
</style>
