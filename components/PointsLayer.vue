<template>
  <div v-if="result">
    <PoiMarker v-for="poi in result.pois" :key="poi.id" :poi="poi" :lat-lng="latLng(poi.pos)" />
  </div>

</template>

<script lang="ts" setup>
import { LatLng } from 'leaflet';
import { GetPoisDocument, PosFragment } from '~/graphql/generated';
import { toMapPos } from '~/shared/projection';
import type { Map } from '~/types/Map';
const { map } = defineProps<{ map: Map }>()

function latLng(pos: PosFragment) {
  return new LatLng(...toMapPos(map, pos))
}

const { result } = useQuery(GetPoisDocument)
</script>