import { Map } from "~/types/Map";

const useMap = () => useState<Map | null>("map", () => null);

export default useMap;
