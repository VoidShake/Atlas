<template>
   <div id="map-wrap">
      <slot name="dialogs" />
      <client-only>
         <MapLeaflet v-if="context" :center="center" :zoom="zoom" :disable-controls="disableControls" :ref="ready"
            @click="(...args) => emit('click', ...args)" @contextmenu="(...args) => emit('contextmenu', ...args)">
            <slot />
         </MapLeaflet>
      </client-only>
   </div>
</template>

<script lang="ts" setup>
import type { LeafletMouseEvent, Map } from 'leaflet';
import { type PosFragment } from '~/graphql/generated';
import type { World } from '~~/composables/useMap';

const props = defineProps<{
   center?: PosFragment
   zoom?: number
   bounds?: [PosFragment, PosFragment]
   disableControls?: boolean
}>()

function ready(map?: { leaflet: Map }) {
   if (props.bounds) {
      const latLngBounds = props.bounds.map(it => toMapPos(context.value!.map, it))
      map?.leaflet?.fitBounds(latLngBounds)
   }
}

const emit = defineEmits<{
   (e: 'click', pos: PosFragment, event: LeafletMouseEvent): void
   (e: 'contextmenu', pos: PosFragment, event: LeafletMouseEvent): void
}>()

interface DynmapOptions {
   defaultmap: string
   defaultworld: string
   defaultzoom: number
   worlds: World[]
}

const { data: options, refresh } = await useFetch<DynmapOptions>('/dynmap/up/configuration', {
   transform: r => {
      if (typeof r === 'string') return JSON.parse(r)
      return r;
   },
})

const context = useMap()

effect(() => {
   const id = setTimeout(refresh, 0)
   return () => clearTimeout(id)
})

watch(options, value => {
   if (!value || context.value) return
   const { defaultworld, defaultmap, worlds } = value

   const world = worlds.find(it => it.name.toLowerCase() === defaultworld.toLowerCase()) ?? worlds[0]

   const map = world?.maps.find(it => it.name.toLowerCase() === defaultmap.toLowerCase()) ?? world.maps[0]

   if (!map) return

   const minZoom = map.mapzoomin + 1
   const maxZoom = minZoom + map.mapzoomout
   const maxNativeZoom = map.mapzoomout

   context.value = { map, world, minZoom, maxZoom, maxNativeZoom }
})
</script>