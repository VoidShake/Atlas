<template>
   <NuxtLayout name="default">
      <div class="grid grid-flow-col gap-5">
         <div id="map-wrap">
            <client-only v-if="context">
               <MapLeaflet @click="closeMenu" @contextmenu="mapMenu" />
            </client-only>
         </div>
         <SidePanel>
            <slot />
         </SidePanel>
         <DialogCreateLocation v-if="selected?.action == 'add-marker'" :pos="selected.pos" @close="selected = null" />
      </div>
   </NuxtLayout>
</template>

<script lang="ts" setup>
import type { LeafletMouseEvent } from 'leaflet'
import { Permission, PosFragment } from '~/graphql/generated'
import { DynmapOptions } from '~/types/options'

const { data: options, refresh } = await useFetch<DynmapOptions>('/dynmap/up/configuration', {
   transform: r => JSON.parse(r as unknown as string),
})

const context = useMap()

const selected = ref<null | {
   pos: PosFragment
   action: 'add-marker'
}>(null)

function mapMenu(pos: PosFragment, e: LeafletMouseEvent) {
   openMenu(e.originalEvent, {
      title: formatPos(pos),
      buttons: [
         {
            text: 'Create Marker',
            permission: Permission.CreateLocation,
            click: () => (selected.value = { action: 'add-marker', pos }),
         },
      ],
   })
}

effect(() => refresh())

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

<style scoped>
#map-wrap {
   height: 1000px;
   width: 1200px;
}
</style>
