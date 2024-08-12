<template>
   <div class="grid grid-flow-col gap-4">
      <FormKit v-model="xRef" name="x" validation="required" label="X" type="number" step="1" />
      <FormKit name="y" placeholder="optional" label="Y" type="number" step="1" :value="floored?.y" />
      <FormKit v-model="zRef" name="z" validation="required" label="Z" type="number" step="1" />
   </div>
   <MapView v-if="showMap" id="map" :zoom="8" :center="marker" @click="moveTo">
      <MapDraggableMarker v-if="marker" :pos="marker" @dragend="moveTo" />
   </MapView>
</template>

<script lang="ts" setup>
import { type Point, type PosFragment } from '~~/graphql/generated'

const props = defineProps<{
   initial?: Partial<Point>
   showMap?: boolean
}>()

const floored = computed(() => props.initial && roundPos(props.initial))

const xRef = ref<number | undefined>(floored.value?.x)
const zRef = ref<number | undefined>(floored.value?.z)

const marker = computed(() => {
   const x = xRef?.value
   const z = zRef?.value
   if (notNull(x) && notNull(z)) return { x, z } as PosFragment
   return undefined
})

function moveTo(pos: PosFragment) {
   const { x, z } = roundPos(pos)
   xRef.value = x
   zRef.value = z
}
</script>

<style lang="scss" scoped>
#map {
   width: 100%;
   aspect-ratio: 1 / 1;
   max-height: 500px;
}
</style>
