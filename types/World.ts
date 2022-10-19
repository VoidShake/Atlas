import { PosFragment } from '~~/graphql/generated'
import { Map } from './Map'

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
