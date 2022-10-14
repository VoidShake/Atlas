<template>
   <l-marker :lat-lng="latLng" :name="poi.name" :key="poi.id" @ready="ready">
      <l-popup>
         {{ poi.name }}
         {{ poi.pos.x }} / {{ poi.pos.z }}
      </l-popup>
   </l-marker>
</template>
 
<script lang="ts" setup>
import { LMarker, LPopup } from '@vue-leaflet/vue-leaflet';
import type { LatLng, Marker } from 'leaflet';
import { MapPoiFragment } from '~/graphql/generated';

defineProps<{
   poi: MapPoiFragment,
   latLng: LatLng
}>()

/*
const emit = defineEmits<{
   (e: 'click'): void
   (e: 'hover'): void
}>()
*/

function ready(marker: Marker) {
   //marker.on('click', () => emit('click'))
   //marker.on('mouseover', () => emit('hover'))
}

</script>