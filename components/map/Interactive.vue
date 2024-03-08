<template>
   <MapView @click="closeMenu" @contextmenu="mapMenu">
      <template #dialogs>
         <DialogCreatePlace v-if="selected?.action == 'add-marker'" :pos="selected.pos" @close="selected = null" />
      </template>

      <MapLocations />
   </MapView>
</template>

<script lang="ts" setup>
import type { LeafletMouseEvent } from 'leaflet';
import { Permission, type PosFragment } from '~/graphql/generated';

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
</script>