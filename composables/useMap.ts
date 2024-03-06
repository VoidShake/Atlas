import type { PosFragment } from '~~/graphql/generated'

export type ProjectionMatrix = [number, number, number, number, number, number, number, number, number]

export interface Map {
   azimuth: number
   inclination: number
   bigmap: boolean
   boostzoom: number
   icon?: string
   'image-format': string
   maptoworld: ProjectionMatrix
   worldtomap: ProjectionMatrix
   mapzoomin: number
   mapzoomout: number
   name: string
   title: string
   nightandday: boolean
   prefix: string
   protected: boolean
   scale: number
   tilescale: number
   background?: string
   backgroundday?: string
   backgroundnight?: string
}

export interface World {
   center: PosFragment
   extrazoomout: number
   name: string
   title: string
   protected: boolean
   sealevel: number
   worldheight: number
   maps: Map[]
}

export interface MapContext {
   map: Map
   world: World
   minZoom: number
   maxZoom: number
   maxNativeZoom: number
}

export const useMap = () => useState<MapContext | null>('map', () => null)
