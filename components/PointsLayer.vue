<template>
  <div v-if="result">
    <PoiMarker v-for="poi in result.pois" :key="poi.id" :poi="poi" :lat-lng="latLng(poi.pos)"
      @click="e =>$emit('click', poi, e)" @mouseenter="e =>$emit('mouseenter', poi, e)"
      @contextmenu="e => $emit('contextmenu', poi, e)" />
  </div>

</template>

<script lang="ts" setup>
import { LatLng, LeafletMouseEvent } from 'leaflet';
import { GetPoisDocument, MapPoiFragment, PosFragment } from '~/graphql/generated';
import { toMapPos } from '~/shared/projection';
import useMap from "~/store/useMap";

const emit = defineEmits<{
  (e: 'click', poi: MapPoiFragment, event: LeafletMouseEvent): void
  (e: 'mouseenter', poi: MapPoiFragment, event: LeafletMouseEvent): void
  (e: 'contextmenu', poi: MapPoiFragment, event: LeafletMouseEvent): void
}>()

const map = useMap()

function latLng(pos: PosFragment) {
  return new LatLng(...toMapPos(map.value, pos))
}

const { result } = useQuery(GetPoisDocument)
</script>