<template>
  <div v-if="result">
    <MapPoiMarker v-for="poi in result.pois" :key="poi.id" :poi="poi" :lat-lng="latLng(poi.pos)"
      @click="$emit('click', poi, $event)" @mouseenter="$emit('mouseenter', poi, $event)"
      @contextmenu="$emit('contextmenu', poi, $event)" />
  </div>

</template>

<script lang="ts" setup>
import { LatLng, LeafletMouseEvent } from 'leaflet';
import { GetPoisDocument, MapPoiFragment, PosFragment } from '~/graphql/generated';
import { toMapPos } from '~/shared/projection';
import useMap from "~/store/useMap";

defineEmits<{
  (e: 'click', poi: MapPoiFragment, event: LeafletMouseEvent): void
  (e: 'mouseenter', poi: MapPoiFragment, event: LeafletMouseEvent): void
  (e: 'contextmenu', poi: MapPoiFragment, event: LeafletMouseEvent): void
}>()

const context = useMap()

function latLng(pos: PosFragment) {
  return new LatLng(...toMapPos(context.value.map, pos))
}

const { result } = useQuery(GetPoisDocument)
</script>