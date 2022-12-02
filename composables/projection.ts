import type { LatLng } from 'leaflet'
import { Map } from './useMap'
import { FlatPoint, PosFragment } from '~/graphql/generated'

export function toWorldPos(map: Map, point: LatLng): PosFragment {
   const matrix = map.maptoworld

   // const lat = (128 << map.tilescale) + point.lat * (1 << map.mapzoomout);
   const lat = point.lat * (1 << map.mapzoomout)
   const lng = point.lng * (1 << map.mapzoomout)

   const y = 0
   const x = (matrix[0] * lng + matrix[1] * lat + matrix[2] * y) * map.scale
   const z = (matrix[6] * lng + matrix[7] * lat + matrix[8] * y) * map.scale

   return { x, y, z }
}

export function toMapPos(map: Map, pos: PosFragment | FlatPoint): [number, number] {
   const matrix = map.worldtomap
   const { x, y, z } = pos as PosFragment

   const lat = matrix[3] * x + matrix[4] * (y ?? 0) + matrix[5] * z
   const lng = matrix[0] * x + matrix[1] * (y ?? 0) + matrix[2] * z

   // const scaledLat = -(((128 << map.tilescale) - lat) / (1 << map.mapzoomout)) / map.scale;
   const scaledLat = lat / (1 << map.mapzoomout) / map.scale
   const scaledLng = lng / (1 << map.mapzoomout) / map.scale

   return [scaledLat, scaledLng]
}
