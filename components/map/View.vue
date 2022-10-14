<template>
   <div class="grid grid-flow-col">
      <div id="map-wrap">
         <MapLeaflet @click="c" @contextmenu="mapMenu" @poiClick="selectPOI" @poiContexmenu="poiMenu" />
      </div>
      <LorePanel>
         <slot />
      </LorePanel>
      <DialogCreateTale v-if="selectedPOI?.action == 'add-lore'" :initialPois="[selectedPOI.poi]"
         @close="selectedPOI = null" />
   </div>
</template>

<script lang="ts" setup>
import type { LeafletMouseEvent } from 'leaflet';
import { CreatePoiDocument, MapPoiFragment, PosFragment } from '~/graphql/generated';
import { toWorldPos } from '~/shared/projection';
import useMap from '~/store/useMap';
import { closeMenu, openMenu } from '~/store/useMenu';

function c() {
   console.log('close')
   closeMenu()
}

const router = useRouter()
const context = useMap()

const selectedPOI = ref<null | {
   poi: MapPoiFragment,
   action: 'add-lore'
}>(null)

const { mutate: createMarker } = useMutation(CreatePoiDocument, { refetchQueries: ['getPois'] })

function selectPOI(poi: MapPoiFragment) {
   router.push(`/poi/${poi.slug}`)
}

function menuTitle(e: LeafletMouseEvent) {
   const pos = toWorldPos(context!.value.map, e.latlng)
   return `${Math.floor(pos.x)} / ${Math.floor(pos.z)}`
}

function poiMenu(poi: MapPoiFragment, e: LeafletMouseEvent) {
   openMenu(e.originalEvent, {
      title: menuTitle(e),
      buttons: [{
         'text': 'Add Lore Entry',
         click: () => selectedPOI.value = { action: 'add-lore', poi }
      }]
   })
}

function mapMenu(pos: PosFragment, e: LeafletMouseEvent) {
   openMenu(e.originalEvent, {
      title: menuTitle(e),
      buttons: [{
         text: 'Create Marker',
         click: () => createMarker({
            input: {
               ...pos,
               name: 'test',
               world: 'overworld',
            },
         })
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