<template>
   <div class="grid grid-flow-col gap-4">
      <FormKit name="x" validation="required" label="X" type="number" step="1" :value="floored?.x"
         @node="xNode = $event" />
      <FormKit name="y" placeholder="optional" label="Y" type="number" step="1" :value="floored?.y" />
      <FormKit name="z" validation="required" label="Z" type="number" step="1" :value="floored?.z"
         @node="zNode = $event" />
   </div>
   <MapView v-if="showMap" id="map" :zoom="8" :center="marker" no-controls>
      <MapDraggableMarker v-if="marker" :pos="marker" @dragend="moveTo" />
   </MapView>
</template>

<script lang="ts" setup>
import type { FormKitNode } from '@formkit/core';
import { type Point, type PosFragment } from '~~/graphql/generated';

const props = defineProps<{
   initial?: Partial<Point>
   showMap?: boolean
}>()

const floored = computed(() => props.initial && roundPos(props.initial))
const marker = computed(() => {
   if (notNull(floored.value?.x) && notNull(floored.value?.z)) return floored.value as PosFragment
   return undefined
})

const xNode = ref<FormKitNode>()
const zNode = ref<FormKitNode>()

function moveTo(pos: PosFragment) {
   const { x, z } = roundPos(pos)
   xNode.value?.input(x)
   zNode.value?.input(z)
}
</script>

<style lang="scss" scoped>
#map {
   width: 100%;
   aspect-ratio: 1 / 1;
   max-height: 500px;
}
</style>
