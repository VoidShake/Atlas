<template>
   <l-marker :lat-lng="latLng" draggable @dragend="dragEnd" />
</template>

<script lang="ts" setup>
import { LMarker } from '@vue-leaflet/vue-leaflet';
import type { DragEndEvent } from 'leaflet';
import type { FlatPoint, PosFragment } from '~/graphql/generated';

const context = useMap()

const props = defineProps<{
   pos: PosFragment | FlatPoint
}>()

const emit = defineEmits<{
   (event: 'dragend', payload: PosFragment): void
}>()

function dragEnd(event: DragEndEvent) {
   emit('dragend', toWorldPos(context.value!.map, event.target._latlng))
}

const latLng = computed(() => toMapPos(context.value!.map, props.pos))
</script>
