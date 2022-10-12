<template>
  <l-tile-layer
    :url="`https://mc.westeroscraft.com/tiles/WesterosNew/${map.name}/{scaledX}_{scaledY}/{zoom}_{X}_{Y}.${map['image-format']}`"
    :options="{
      zoom,
      scaledX,
      scaledY,
      X,
      Y,
    }" />
</template>

<script lang="ts" setup>
import { LTileLayer } from "@vue-leaflet/vue-leaflet";
import { Map } from '~/types/Map';
import { MapPos } from '~/types/Pos';

const { map } = defineProps({
  map: {
    type: Object as () => Map,
    required: true,
  }
})

function zoomedOut(pos: MapPos) {
  return Math.max(0, 10 - pos.z)
}

function zoom(pos: MapPos) {
  return 'zzzzzzzzzzzzzzzzzzzzzzz'.substring(0, zoomedOut(pos))
}

function scaledX(pos: MapPos) {
  return X(pos) >> 5
}

function scaledY(pos: MapPos) {
  return Y(pos) >> 5
}

function scale(pos: MapPos) {
  return 1 << zoomedOut(pos)
}

function X(pos: MapPos) {
  return pos.x * scale(pos)
}

function Y(pos: MapPos) {
  return -pos.y * scale(pos)
}

</script>