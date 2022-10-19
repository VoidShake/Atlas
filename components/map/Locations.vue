<template>
   <div v-if="result">
      <MapLocationMarker
         v-for="it in result.locations.nodes"
         :key="it.id"
         :location="it"
         @click="click(it, $event)"
         @mouseenter="$emit('mouseenter', it, $event)"
         @contextmenu="menu(it, $event)"
      />
      <DialogCreateTale
         v-if="selected?.action == 'add-lore'"
         :initialLocations="[selected.location]"
         @close="selected = null"
      />
   </div>
</template>

<script lang="ts" setup>
import { LeafletMouseEvent } from 'leaflet'
import { GetLocationsDocument, MapLocationFragment, Permission } from '~/graphql/generated'

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
            click: () => (selected.value = { action: 'add-lore', location: location }),
         },
      ],
   })
}

function click(location: MapLocationFragment, event: LeafletMouseEvent) {
   emit('click', location, event)
   router.push(`/location/${location.slug}`)
}

const { result } = useQuery(GetLocationsDocument)
</script>
