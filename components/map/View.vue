<template>
   <div id="map-wrap">
      <slot name="dialogs" />
      <client-only v-if="context">
         <MapLeaflet :center="center" :zoom="zoom" :disableControls="disableControls"
            @click="(...args) => emit('click', ...args)" @contextmenu="(...args) => emit('contextmenu', ...args)">
            <slot />
         </MapLeaflet>
      </client-only>
   </div>
</template>

<script lang="ts" setup>
import type { LeafletMouseEvent } from 'leaflet';
import { type PosFragment } from '~/graphql/generated';
import type { World } from '~~/composables/useMap';

defineProps<{
   center?: PosFragment
   zoom?: number
   disableControls?: boolean
}>()

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
   transform: r => JSON.parse(r as unknown as string),
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