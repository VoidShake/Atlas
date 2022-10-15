<template>
  <l-map v-model:zoom="zoom" @ready="ready" zoomAnimation fadeAnimation v-model:center="center" :crs="crs"
    :minZoom="context.minZoom" :maxZoom="context.maxZoom" :maxNativeZoom="context.maxNativeZoom"
    @contextmenu=" emitWithPos('contextmenu', $event)" @click=" emitWithPos('click', $event)">
    <MapTiles />
    <MapPois @click="(p, e) => $emit('poiClick', p, e)" @contextmenu="(p, e) => $emit('poiContexmenu', p, e)" />
  </l-map>
</template>

<script lang="ts" setup>
import { LMap } from "@vue-leaflet/vue-leaflet";
import { CRS, LeafletMouseEvent, Map } from 'leaflet';
import { MapPoiFragment, PosFragment } from "~/graphql/generated";
import { toWorldPos } from "~/shared/projection";
import useMap from '~/store/useMap';

const emit = defineEmits<{
  (e: 'poiClick', poi: MapPoiFragment, event: LeafletMouseEvent)
  (e: 'poiContexmenu', poi: MapPoiFragment, event: LeafletMouseEvent)
  (e: 'click', pos: PosFragment, event: LeafletMouseEvent)
  (e: 'contextmenu', pos: PosFragment, event: LeafletMouseEvent)
}>()

function emitWithPos(e: 'click' | 'contextmenu', event: LeafletMouseEvent | PointerEvent) {
  if ('latlng' in event) {
    emit(e as any, toWorldPos(context.value.map, event.latlng), event)
  }
}

const context = useMap()

const crs = CRS.Simple
const zoom = useState('zoom', () => 0)
//const center = useState('center', () => context.value && toWorldPos(context.value.map, context.value.world.center))
const center = useState('center', () => [0, 0])
const bounds = [[-64, 531], [-704, -110]]

function ready(map: Map) {
  //map.fitBounds(bounds)
  //console.log(map.getBounds())
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