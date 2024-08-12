<template>
   <FormKit v-model="points" name="points" placeholder="optional" label="Max-Y" type="hidden" />
   <MapView id="map" :zoom="8" :bounds="bounds" @click="addPoint">
      <l-polygon :lat-lngs="latLngs" color="#41b782" :fill="true" :fill-opacity="0.5" fill-color="#41b782" />
      <MapDraggableMarker
         v-for="(point, i) in points"
         :key="i"
         :pos="point"
         @dragend="updatePoint(i, $event)"
         @contextmenu="removePoint(i)"
      />
   </MapView>
</template>

<script lang="ts" setup>
import { LPolygon } from '@vue-leaflet/vue-leaflet'
import { minBy } from 'lodash-es'
import type { FlatPoint, PosFragment } from '~/graphql/generated'

const context = useMap()

const props = defineProps<{
   initial?: FlatPoint[]
}>()

const points = ref<FlatPoint[]>(props.initial ?? [])

const latLngs = computed(() => points.value.map(it => toMapPos(context.value!.map, it)))

const bounds = computed(() => props.initial && getBounds(props.initial))

function distance(a: FlatPoint, b: FlatPoint) {
   return Math.sqrt((a.x - b.x) ** 2 + (a.z - b.z) ** 2)
}

function findClosest(point: FlatPoint, between: FlatPoint[]) {
   const min = minBy(between, it => distance(point, it))
   return min && between.indexOf(min)
}

function addPoint(pos: PosFragment) {
   const { x, z } = roundPos(pos)
   const current = points.value
   const closest = findClosest({ x, z }, current)
   if (notNull(closest)) {
      const neighbours = [
         current[(closest - 1 + current.length) % current.length],
         current[(closest + 1) % current.length],
      ]
      const closestNeighbour = findClosest({ x, z }, neighbours)!

      const newPoints = [...current]
      if (closestNeighbour === 0) {
         newPoints.splice(closest, 0, { x, z })
      } else {
         newPoints.splice((closest + 1) % current.length, 0, { x, z })
      }

      points.value = newPoints
   } else {
      points.value = [...points.value, { x, z }]
   }
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
