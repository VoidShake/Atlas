<template>
  <l-tile-layer noWrap :tileSize="tileSize" @ready="ready" :url="url" :options="{
    zoomPrefix,
    scaledX,
    scaledY,
    X,
    Y,
  }" />
</template>

<script lang="ts" setup>
import { LTileLayer } from "@vue-leaflet/vue-leaflet";
import type { TileLayer } from "leaflet";
import useMap from "~/store/useMap";
import { PosFragment } from "~~/graphql/generated";

const context = useMap()

const tileSize = computed(() => 128 << (context.value.map.tilescale || 0))
const url = computed(() => {
  const { world, map } = context.value
  //return 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
  return `/dynmap/tiles/${world.name}/${map.name}/{scaledX}_{scaledY}/{zoomPrefix}{X}_{Y}.${map['image-format']}`
})

function ready(layer: TileLayer) {
  const testPos: PosFragment = { x: 23, y: 11, z: 2 }

  console.log(
    {
      x: X(testPos),
      y: Y(testPos),
      scaledX: scaledX(testPos),
      scaledY: scaledY(testPos),
      zoom: zoomPrefix(testPos),
    }
  )
  console.log('ready', layer.getTileUrl(testPos as any))
}

function zoomedOut(pos: PosFragment) {
  return Math.max(0, context.value.map.mapzoomout - pos.z + 1)
}

function zoomPrefix(pos: PosFragment) {
  const z = zoomedOut(pos)
  if (z < 1) return ''
  return 'zzzzzzzzzzzzzzzzzzzzzzz'.substring(0, z) + '_'
}

function scale(pos: PosFragment) {
  return 1 << zoomedOut(pos)
}

function X(pos: PosFragment) {
  return pos.x * scale(pos)
}

function Y(pos: PosFragment) {
  return -pos.y * scale(pos)
}

function scaledX(pos: PosFragment) {
  return X(pos) >> 5
}

function scaledY(pos: PosFragment) {
  return Y(pos) >> 5
}

</script>