<template>
   <l-marker :lat-lng="latLng" :name="place.name" :icon="icon" />
</template>

<script lang="ts" setup>
import { LMarker } from '@vue-leaflet/vue-leaflet';
import { IconProvider, type MapPlaceFragment } from '~/graphql/generated';

const context = useMap()

const props = defineProps<{
   place: MapPlaceFragment
}>()

const iconUrl = computed(() => {
   const { provider, name } = props.place.icon
   switch (provider) {
      case IconProvider.Generated:
         return `https://icons.macarena.ceo/icons/${name}.png`
      default:
         return undefined
   }
})

const icon = computed(() => {
   if (!iconUrl.value) return undefined
   return L.icon({
      iconUrl: iconUrl.value,
      iconSize: [32, 32],
      iconAnchor: [16, 16]
   })
})

const latLng = computed(() => toMapPos(context.value!.map, props.place.pos))
</script>
