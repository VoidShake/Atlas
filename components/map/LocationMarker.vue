<template>
   <l-marker :lat-lng="latLng" :name="location.name" />
</template>
 
<script lang="ts" setup>
import { LMarker } from '@vue-leaflet/vue-leaflet';
import { LatLng } from 'leaflet';
import { MapLocationFragment } from '~/graphql/generated';

const context = useMap()

const { location } = defineProps<{
   location: MapLocationFragment,
}>()

const latLng = computed(() => new LatLng(...toMapPos(context.value!.map, location.pos)))

</script>