import type { LatLng } from "leaflet";
import { Map } from "~/types/Map";
import { PosFragment } from "~~/graphql/generated";

export function toWorldPos(map: Map, { lat, lng }: LatLng): PosFragment {
  const scale = map.scale * 16;
  const matrix = map.maptoworld;
  const y = 0;
  const x = (matrix[0] * lng + matrix[1] * lat + matrix[2] * y) * scale;
  const z = (matrix[6] * lng + matrix[7] * lat + matrix[8] * y) * scale;
  return { x, y, z };
}

export function toMapPos(map: Map, { x, y, z }: PosFragment): [number, number] {
  const wtp = map.worldtomap;
  const scale = map.scale * 16;
  const lat = wtp[3] * x + wtp[4] * (y ?? 0) + wtp[5] * z;
  const lng = wtp[0] * x + wtp[1] * (y ?? 0) + wtp[2] * z;
  return [lat / scale, lng / scale];
}
