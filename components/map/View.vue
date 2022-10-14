<template>
   <div class="grid grid-flow-col">
      <div id="map-wrap">
         <MapLeaflet @click="c" @contextmenu="mapMenu" @poiClick="clickPoi" @poiContexmenu="poiMenu" />
      </div>
      <LorePanel>
         <slot />
      </LorePanel>
      <DialogCreateTale v-if="selectedPoi?.action == 'add-lore'" :initialPois="[selectedPoi.poi]"
         @close="selectedPoi = null" />
      <DialogCreatePoi v-if="selectedPoint?.action == 'add-marker'" :x="selectedPoint.pos.x" :y="selectedPoint.pos.y"
         :z="selectedPoint.pos.z" @close="selectedPoint = null" />
   </div>
</template>

<script lang="ts" setup>
import type { LeafletMouseEvent } from 'leaflet';
import { MapPoiFragment, PosFragment } from '~/graphql/generated';
import { toWorldPos } from '~/shared/projection';
import useMap from '~/store/useMap';
import { closeMenu, openMenu } from '~/store/useMenu';
import { formatPos } from '~~/shared/spatial';

function c() {
   console.log('close')
   closeMenu()
}

const router = useRouter()
const context = useMap()

const selectedPoi = ref<null | {
   poi: MapPoiFragment,
   action: 'add-lore'
}>(null)

const selectedPoint = ref<null | {
   pos: PosFragment,
   action: 'add-marker',
}>(null)

function clickPoi(poi: MapPoiFragment) {
   router.push(`/poi/${poi.slug}`)
}

function menuTitle(e: LeafletMouseEvent) {
   const pos = toWorldPos(context!.value.map, e.latlng)
   return formatPos(pos)
}

function poiMenu(poi: MapPoiFragment, e: LeafletMouseEvent) {
   openMenu(e.originalEvent, {
      title: menuTitle(e),
      buttons: [{
         'text': 'Add Lore Entry',
         click: () => selectedPoi.value = { action: 'add-lore', poi }
      }]
   })
}

function mapMenu(pos: PosFragment, e: LeafletMouseEvent) {
   openMenu(e.originalEvent, {
      title: menuTitle(e),
      buttons: [{
         text: 'Create Marker',
         click: () => selectedPoint.value = { action: 'add-marker', pos }
      }]
   })
}
</script>


<style scoped>
#map-wrap {
   height: 800px;
   width: 1400px;
}
</style>