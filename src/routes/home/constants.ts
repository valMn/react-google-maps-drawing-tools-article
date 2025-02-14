import { Color } from "Theme";
import { POLYGON_CARD_SIZE } from "./PolygonCard";

const NATIVE_TRIANGLE_SIZE = 12;
const POLYGON_CARD_RIGHT_OFFSET = 20;

const PlusSymbol = {
  path: "M0,-1 V1 M-1,0 H1",
  strokeOpacity: 1,
  scale: 3,
};

const MapConfigOptions: google.maps.MapOptions = {
  zoomControl: true,

  mapTypeControl: true,
  disableDefaultUI: false,
  fullscreenControl: true,
  streetViewControl: false,
  gestureHandling: "greedy",
  mapTypeId: "satellite",
};

const MapConfig = {
  zoom: 18,
  center: {
    lat: 51.3535,
    lng: -2.2876,
  },
  options: MapConfigOptions,
  mapContainerStyle: {
    width: "100vw",
    height: "100vh",
  },
};

const PolygonOptions = {
  strokeWeight: 5,
  fillOpacity: 0.3,
  fillColor: Color.OlympicBlue,
  strokeColor: Color.OlympicBlue,
  suppressUndo: true,
};

const PolylineOptions = {
  strokeWeight: 5,
  fillOpacity: 0.3,
  strokeColor: Color.OlympicBlue,
  suppressUndo: true,
  icons: [
    {
      icon: PlusSymbol,
      repeat: "22px",
    },
  ],
};

export const MapSettings = {
  MapConfig,
  PolygonOptions,
  PolylineOptions,
  CircleOptions: PolygonOptions,
  InfoWindowOptions: {
    Triangle: {
      width: 13,
      height: 8,
    },
    PixelOffset: { X: 0, Y: -5 },
    Polygon: {
      UndoPixelOffset: { X: 0, Y: -5 },
      CardPixelOffset: {
        X: POLYGON_CARD_SIZE / 2 + POLYGON_CARD_RIGHT_OFFSET,
        Y: (POLYGON_CARD_SIZE + NATIVE_TRIANGLE_SIZE) / 2,
      },
    },
  },
};
