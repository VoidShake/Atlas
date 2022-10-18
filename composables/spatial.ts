import { PosFragment } from "~~/graphql/generated";

export const roundPos = (pos: PosFragment): PosFragment => {
  const { x, y, z } = pos;
  return { x: Math.floor(x), y: Math.floor(y), z: Math.floor(z) };
};

export const formatPos = (pos: PosFragment) => {
  const { x, y, z } = roundPos(pos);
  if (y) return `${x} / ${y} / ${z}`;
  else return `${x} / ${z}`;
};
