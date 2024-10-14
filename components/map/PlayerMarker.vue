<template>
   <l-marker :lat-lng="latLng">
      <l-icon :icon-size="[32, 32]" :icon-anchor="[16, 16]" class="icon">
         <PlayerHead :uuid="player.uuid" />
      </l-icon>
   </l-marker>
</template>

<script lang="ts" setup>
import { LIcon, LMarker } from '@vue-leaflet/vue-leaflet'
import type { MapPlayerFragment } from '~/graphql/generated'

const props = defineProps<{
   player: MapPlayerFragment
}>()

const context = useMap()

const latLng = computed(() => toMapPos(context.value!.map, props.player.pos))
</script>
