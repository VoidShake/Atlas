import { Map } from "~/types/Map";
import { World } from "~/types/World";

interface MapContext {
  map: Map;
  world: World;
  minZoom: number;
  maxZoom: number;
}

const useMap = () => useState<MapContext | null>("map", () => null);

export default useMap;
