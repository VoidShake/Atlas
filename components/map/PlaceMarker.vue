<template>
   <l-marker :lat-lng="latLng" :name="place.name" />
</template>

<script lang="ts" setup>
import { LMarker } from '@vue-leaflet/vue-leaflet'
import { LatLng } from 'leaflet'
import { MapPlaceFragment } from '~/graphql/generated'

const context = useMap()

const props = defineProps<{
   place: MapPlaceFragment
}>()

const latLng = computed(() => new LatLng(...toMapPos(context.value!.map, props.place.pos)))
</script>
