<template>
   <l-tile-layer
      no-wrap
      :tile-size="tileSize"
      :url="url"
      attribution="  Dynmap"
      :options="{
         zoomPrefix,
         scaledX,
         scaledY,
         X,
         Y,
      }"
   />
</template>

<script lang="ts" setup>
import { LTileLayer } from '@vue-leaflet/vue-leaflet'
import type { Coords } from 'leaflet'

const context = useMap()

const tileSize = computed(() => 128 << (context.value?.map.tilescale ?? 0))
const url = computed(() => {
   if (!context.value) return null
   const { world, map } = context.value
   // return 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
   return `/dynmap/tiles/${world.name}/${map.name}/{scaledX}_{scaledY}/{zoomPrefix}{X}_{Y}.${map['image-format']}`
})

function zoomedOut(pos: Coords) {
   return Math.max(0, context.value!.map.mapzoomout - pos.z + 2)
}

function zoomPrefix(pos: Coords) {
   const z = zoomedOut(pos)
   if (z < 1) return ''
   return 'zzzzzzzzzzzzzzzzzzzzzzz'.substring(0, z) + '_'
}

function scale(pos: Coords) {
   return 1 << zoomedOut(pos)
}

function X(pos: Coords) {
   return pos.x * scale(pos)
}

function Y(pos: Coords) {
   return -pos.y * scale(pos)
}

function scaledX(pos: Coords) {
   return X(pos) >> 5
}

function scaledY(pos: Coords) {
   return Y(pos) >> 5
}
</script>
