import { max, min } from 'lodash-es'
import type { FlatPoint, Point, PosFragment } from '~~/graphql/generated'

function floorOptional(i: number | undefined | null) {
   if (notNull(i)) return Math.floor(i)
   return i
}

export function roundPos<P extends Partial<Point>>(pos: P): P {
   const { x, y, z } = pos
   return { ...pos, x: floorOptional(x), y: floorOptional(y), z: floorOptional(z) }
}

export const formatPos = (pos: PosFragment) => {
   const { x, y, z } = roundPos(pos)
   if (y) return `${x} / ${y} / ${z}`
   else return `${x} / ${z}`
}

export function getBounds(points: FlatPoint[]): [FlatPoint, FlatPoint] {
   const xs = points.map(it => it.x)
   const zs = points.map(it => it.z)
   return [
      { x: min(xs)!, z: min(zs)! },
      { x: max(xs)!, z: max(zs)! },
   ]
}
