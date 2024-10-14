<template>
   <l-layer-group v-if="result">
      <MapPlayerMarker v-for="player of result.players" :key="player.uuid" :player="player" />
   </l-layer-group>
</template>

<script lang="ts" setup>
import { LLayerGroup } from '@vue-leaflet/vue-leaflet'
import { GetPlayersDocument } from '~/graphql/generated'

const { result } = useQuery(GetPlayersDocument, {}, { pollInterval: 500, fetchPolicy: 'no-cache' })
</script>
