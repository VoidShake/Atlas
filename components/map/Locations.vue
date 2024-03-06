<template>
   <div v-if="result">
      <MapPlaceMarker
v-for="it in result.places.nodes" :key="it.id" :place="it" @click="click(it, $event)"
         @mouseenter="$emit('mouseenter', it, $event)" @contextmenu="menu(it, $event)"
/>
      <MapAreaMarker v-for="it in result.areas.nodes" :key="it.id" :area="it" />
      <DialogCreateTale
v-if="selected?.action == 'add-lore'" :initial-places="[selected.location.id]"
         @close="selected = null"
/>
   </div>
</template>

<script lang="ts" setup>
import type { LeafletMouseEvent } from 'leaflet';
import { MapLocationsDocument, Permission, type MapLocationFragment, type MapPlaceFragment } from '~/graphql/generated';

const router = useRouter()

const emit = defineEmits<{
   (e: 'click', location: MapLocationFragment, event: LeafletMouseEvent): void
   (e: 'mouseenter', location: MapLocationFragment, event: LeafletMouseEvent): void
   (e: 'contextmenu', location: MapLocationFragment, event: LeafletMouseEvent): void
}>()

const selected = ref<null | {
   location: MapLocationFragment
   action: 'add-lore'
}>(null)

function menu(location: MapLocationFragment, event: LeafletMouseEvent) {
   emit('contextmenu', location, event)
   openMenu(event.originalEvent, {
      title: location.name,
      buttons: [
         {
            text: 'Add Lore Entry',
            permission: Permission.TellTale,
            click: () => (selected.value = { action: 'add-lore', location }),
         },
      ],
   })
}

function click(location: MapPlaceFragment, event: LeafletMouseEvent) {
   emit('click', location, event)
   if (location.__typename === 'Place') {
      router.push(`/map/${location.slug}`)
   }
}

const { result } = useQuery(MapLocationsDocument)
</script>
