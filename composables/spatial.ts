import { Point, PosFragment } from '~~/graphql/generated'

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
