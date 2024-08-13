<template>
   <FormKit v-model="points" name="points" placeholder="optional" label="Max-Y" type="hidden" validation="length:3" />
   <MapView id="map" :zoom="8" :bounds="bounds" @click="addPoint">
      <l-polygon
         :lat-lngs="latLngs"
         :fill="true"
         :fill-opacity="0.5"
         color="#41b782"
         fill-color="#41b782"
         :clickable="false"
      />
      <MapDraggableMarker
         v-for="(point, i) in points"
         :key="i"
         :pos="point"
         @dragend="updatePoint(i, $event)"
         @contextmenu="removePoint(i)"
      />
      <l-polyline
         v-for="(latLng, i) in latLngs"
         :key="i"
         color="transparent"
         :lat-lngs="[latLng, latLngs[(i + 1) % latLngs.length]]"
         :weight="30"
         @click="splitEdge(i + 1, $event)"
      />
   </MapView>
</template>

<script lang="ts" setup>
import { LPolygon, LPolyline } from '@vue-leaflet/vue-leaflet'
import type { LeafletMouseEvent } from 'leaflet'
import type { FlatPoint, PosFragment } from '~/graphql/generated'

const context = useMap()

const props = defineProps<{
   initial?: FlatPoint[]
}>()

const points = ref<FlatPoint[]>(props.initial ?? [])

const latLngs = computed(() => points.value.map(it => toMapPos(context.value!.map, it)))

const bounds = computed(() => props.initial && getBounds(props.initial))

function splitEdge(index: number, event: LeafletMouseEvent) {
   L.DomEvent.stopPropagation(event)

   const { x, z } = roundPos(toWorldPos(context.value!.map, event.latlng))

   const newPoints = [...points.value]
   newPoints.splice(index, 0, { x, z })
   points.value = newPoints
}

function addPoint(pos: PosFragment) {
   if (points.value.length > 2) return
   const { x, z } = roundPos(pos)
   points.value = [...points.value, { x, z }]
}

function removePoint(index: number) {
   points.value = points.value.toSpliced(index, 1)
}

function updatePoint(index: number, { x, z }: PosFragment) {
   const newPoints = [...points.value]
   newPoints[index] = roundPos({ x, z })
   points.value = newPoints.map(it => {
      const { x, z } = roundPos(it)
      return { x, z }
   })
}
</script>

<style lang="scss" scoped>
#map {
   width: 100%;
   aspect-ratio: 1 / 1;
   max-height: 500px;
}
</style>
