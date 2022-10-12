<template>
  <div v-if="result">
    <l-marker v-for="poi in result.pois" :lat-lng="[poi.pos.x, poi.pos.z]" :name="poi.name" :key="poi.id" />
  </div>

</template>

<script lang="ts" setup>
import { LMarker } from '@vue-leaflet/vue-leaflet';
import { GetPoisDocument } from '~/graphql/generated';

const { result } = useQuery(GetPoisDocument)
</script>