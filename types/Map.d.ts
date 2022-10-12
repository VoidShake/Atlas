export interface Map {
  azimuth: number
  inclination: number
  bigmap: boolean
  boostzoom: number
  icon?: string
  'image-format': string
  maptoworld: [
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number
  ]
  mapzoomin: number
  mapzoomout: number
  name: string
  title: string
  nightandday: boolean
  prefix: string
  protected: boolean
  scale: number
}
