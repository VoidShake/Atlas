export type ProjectionMatrix = [
  number,
  number,
  number,
  number,
  number,
  number,
  number,
  number,
  number
];

export interface Map {
  azimuth: number;
  inclination: number;
  bigmap: boolean;
  boostzoom: number;
  icon?: string;
  "image-format": string;
  maptoworld: ProjectionMatrix;
  worldtomap: ProjectionMatrix;
  mapzoomin: number;
  mapzoomout: number;
  name: string;
  title: string;
  nightandday: boolean;
  prefix: string;
  protected: boolean;
  scale: number;
  tilescale?: number;
}
