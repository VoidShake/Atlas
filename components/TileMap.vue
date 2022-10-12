<template>
  <div id="map-wrap">
    <p v-if="pending">Loading....</p>
    <client-only v-else-if="map">
      <l-map v-model:zoom="zoom" v-model:center="center" :minZoom="minZoom" :maxZoom="maxZoom">
        <MapLayer :map="map" />
        <PointsLayer />
      </l-map>
    </client-only>
  </div>
</template>

<script lang="ts" setup>
import { LMap } from "@vue-leaflet/vue-leaflet";
import { World } from '~/types/World';

const zoom = useState('zoom', () => 3)
const center = useState('center', () => [0, 0])

interface Options {
  defaultmap: string
  defaultworld: string
  defaultzoom: number
  worlds: World[]
}

const { data: options, pending, refresh } = await useFetch<Options>('/dynmap/standalone/dynmap_config.json')

effect(() => refresh())

const map = computed(() => {
  if (!options.value) return null
  const { defaultworld } = options.value
  const defaultmap = 'flat'
  const world = options.value?.worlds.find(
    (it) =>
      it.name.toLowerCase() === defaultworld.toLowerCase()
  )
  return world?.maps.find(
    (it) => it.name.toLowerCase() === defaultmap.toLowerCase()
  )
})

const minZoom = computed(() => map.value && (map.value.mapzoomin - 1))
const maxZoom = computed(() => map.value && (map.value.mapzoomin + map.value.mapzoomout - 2))
</script>

<style>
#map-wrap {
  height: 800px;
  width: 1400px;
}
</style>