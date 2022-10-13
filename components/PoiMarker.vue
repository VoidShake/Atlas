<template>
   <l-marker :lat-lng="latLng" :name="poi.name" :key="poi.id">
      <l-popup>
         {{ poi.name }}
         {{ poi.pos.x }} / {{ poi.pos.z }}
      </l-popup>
   </l-marker>
</template>
 
<script lang="ts" setup>
import { LMarker, LPopup } from '@vue-leaflet/vue-leaflet';
import { LatLng } from 'leaflet';
import { MapPoiFragment } from '~/graphql/generated';

defineProps<{
   poi: MapPoiFragment,
   latLng: LatLng
}>()

</script>