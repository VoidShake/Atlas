<template>
   <l-polygon :lat-lngs="latLngs" color="#41b782" :fill="true" :fill-opacity="0.5" fill-color="#41b782" />
</template>

<script lang="ts" setup>
import { LPolygon } from '@vue-leaflet/vue-leaflet'
import { LatLng } from 'leaflet'
import { MapAreaFragment } from '~/graphql/generated'

const context = useMap()

const props = defineProps<{
   area: MapAreaFragment
}>()

const latLngs = computed(() => props.area.points.map(it => new LatLng(...toMapPos(context.value!.map, it))))
</script>
