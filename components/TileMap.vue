<template>
  <client-only v-if="context">
    <l-map v-model:zoom="zoom" @ready="ready" zoomAnimation
      @contextmenu=" $emit('contextmenu', toWorldPos(context.map, $event.latlng), $event)" v-model:center="center"
      :minZoom="context.minZoom" :maxZoom="context.maxZoom">
      <MapLayer />
      <PointsLayer @click="(p, e) => $emit('poiClick', p, e)" @contextmenu="(p, e) => $emit('poiContexmenu', p, e)" />
    </l-map>
  </client-only>
</template>

<script lang="ts" setup>
import { LMap } from "@vue-leaflet/vue-leaflet";
import type { LeafletMouseEvent, Map } from 'leaflet';
import { MapPoiFragment, PosFragment } from "~/graphql/generated";
import { toWorldPos } from "~/shared/projection";
import useMap from '~/store/useMap';
import { World } from '~/types/World';

defineEmits<{
  (e: 'poiClick', poi: MapPoiFragment, event: LeafletMouseEvent)
  (e: 'poiContexmenu', poi: MapPoiFragment, event: LeafletMouseEvent)
  (e: 'contextmenu', pos: PosFragment, event: LeafletMouseEvent)
}>()

const zoom = useState('zoom', () => 0)
const center = useState('center', () => [0, 0])
const bounds = [[-64, 531], [-704, -110]]

function ready(map: Map) {
  //map.fitBounds(bounds)
  //console.log(map.getBounds())
}

interface Options {
  defaultmap: string
  defaultworld: string
  defaultzoom: number
  worlds: World[]
}

const { data: options, refresh } = await useFetch<Options>('/dynmap/up/configuration', { responseType: 'json' })

effect(() => refresh())

const context = useMap()

watch(options, value => {
  if (!value || context.value) return
  const { defaultworld, defaultmap, worlds } = value

  const world = worlds.find(
    (it) =>
      it.name.toLowerCase() === defaultworld.toLowerCase()
  ) ?? worlds[0]

  const map = world?.maps.find(
    (it) => it.name.toLowerCase() === defaultmap.toLowerCase()
  ) ?? world.maps[0]

  if (!map) return

  const minZoom = map.mapzoomin + 1
  const maxZoom = minZoom + map.mapzoomout

  context.value = { map, world, minZoom, maxZoom }
})

watch(zoom, v => console.log('zoom', v))

</script>

<style>
.leaflet-container {
  background: transparent;
}

img.leaflet-tile {
  image-rendering: pixelated;
}
</style>