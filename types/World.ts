import { Map } from './Map'
import { Pos } from './Pos'

export interface World {
  center: Pos
  extrazoomout: number
  name: string
  title: string
  protected: boolean
  sealevel: number
  worldheight: number
  maps: Map[]
}
