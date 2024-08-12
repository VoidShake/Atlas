<template>
   <l-marker :lat-lng="latLng" :name="place.name">
      <l-icon :icon-url="iconUrl" :icon-size="[32, 32]" :icon-anchor="[16, 16]" />
   </l-marker>
</template>

<script lang="ts" setup>
import { LIcon, LMarker } from '@vue-leaflet/vue-leaflet'
import { IconProvider, type MapPlaceFragment } from '~/graphql/generated'

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

const latLng = computed(() => toMapPos(context.value!.map, props.place.pos))
</script>
