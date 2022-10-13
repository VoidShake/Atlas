<template>
  <div class="grid grid-flow-col">

    <div id="map-wrap">
      <p v-if="pending">Loading....</p>
      <client-only v-else-if="map">
        <l-map v-model:zoom="zoom" @ready="ready" v-model:center="center" :minZoom="minZoom" :maxZoom="maxZoom">
          <MapLayer />
          <PointsLayer @click="selectPOI" @contextmenu="poiMenu" />
        </l-map>
      </client-only>
    </div>
    <LorePanel>
      <slot />
    </LorePanel>
  </div>
</template>

<script lang="ts" setup>
import { LMap } from "@vue-leaflet/vue-leaflet";
import { LeafletMouseEvent, Map } from 'leaflet';
import { CreatePoiDocument, MapPoiFragment } from "~/graphql/generated";
import { toWorldPos } from '~/shared/projection';
import { openDialog } from "~/store/useDialog";
import useMap from '~/store/useMap';
import { World } from '~/types/World';

const router = useRouter()

const zoom = useState('zoom', () => 3)
const center = useState('center', () => [0, 0])

interface Options {
  defaultmap: string
  defaultworld: string
  defaultzoom: number
  worlds: World[]
}

const { data: options, pending, refresh } = await useFetch<Options>('/dynmap/standalone/dynmap_config.json')

effect(() => refresh())

watch(options, value => {
  if (!value || map.value) return

  const { defaultworld } = value
  const defaultmap = 'flat'
  const world = options.value?.worlds.find(
    (it) =>
      it.name.toLowerCase() === defaultworld.toLowerCase()
  )
  map.value = world?.maps.find(
    (it) => it.name.toLowerCase() === defaultmap.toLowerCase()
  )
})

const map = useMap()

const minZoom = computed(() => map.value && (map.value.mapzoomin - 1))
const maxZoom = computed(() => map.value && (map.value.mapzoomin + map.value.mapzoomout - 2))

const { mutate: createMarker } = useMutation(CreatePoiDocument, { refetchQueries: ['getPois'] })

function selectPOI(poi: MapPoiFragment) {
  router.push(`/poi/${poi.slug}`)
}

function poiMenu(poi: MapPoiFragment, e: LeafletMouseEvent) {
  openDialog(e.originalEvent, {
    buttons: [{
      'text': 'Add Lore Entry',
      click: () => { console.log('LORE!') }
    }]
  })
}

function openMenu(e: LeafletMouseEvent) {
  openDialog(e.originalEvent, {
    buttons: [{
      text: 'Create Marker',
      click: () => createMarker({
        input: {
          name: 'test',
          world: 'overworld',
          ...toWorldPos(map.value, e.latlng),
        },
      })
    }]
  })
}

function ready(map: Map) {
  map.on('contextmenu', openMenu)
}
</script>

<style scoped>
#map-wrap {
  height: 800px;
  width: 1400px;
}

.leaflet-container {
  background: transparent;
}
</style>