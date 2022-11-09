import { Map } from './Map'
import { PosFragment } from '~~/graphql/generated'

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
