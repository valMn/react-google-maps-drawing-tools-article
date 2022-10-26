import { Color } from "Theme";
import { CIRCLE_CARD_WIDTH } from "./CircleCard";

export const LineDistanceCardHeight = {
  SMALL: 90,
  MEDIUM: 220,
};

export const MAP_BUTTON_HEIGHT = 40;
export const POLYGON_CARD_WIDTH = 320;
export const POLYGON_CARD_HEIGHT = 320;
export const LINE_DISTANCE_CARD_WIDTH = 280;
export const DEFAULT_MAP_ID = "17afae0de3565f";

const NATIVE_TRIANGLE_SIZE = 11;
const CIRCLE_CARD_RIGHT_OFFSET = 26;
const POLYGON_CARD_RIGHT_OFFSET = 20;
const LINE_DISTANCE_CARD_RIGHT_OFFSET = 26;

const PlusSymbol = {
  path: "M0,-1 V1 M-1,0 H1",
  strokeOpacity: 1,
  scale: 3,
};

const MapConfigOptions: google.maps.MapOptions = {
  zoomControl: false,
  mapTypeControl: false,
  disableDefaultUI: true,
  fullscreenControl: false,
  streetViewControl: false,
  streetViewControlOptions: {
    position: 5.0,
  },
  mapId: DEFAULT_MAP_ID,
  gestureHandling: "greedy",
};

const MapConfig = {
  zoom: 12,
  center: { lat: 48.716385, lng: 21.261074 },
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
  CircleOptions: PolygonOptions,
  PolylineOptions,
  InfoWindowOptions: {
    Triangle: {
      width: 13,
      height: 8,
    },
    PixelOffset: { X: 0, Y: -5 },
    Polygon: {
      UndoPixelOffset: { X: 0, Y: -5 },
      CardPixelOffset: {
        X: POLYGON_CARD_WIDTH / 2 + POLYGON_CARD_RIGHT_OFFSET,
        Y: POLYGON_CARD_HEIGHT / 2 + NATIVE_TRIANGLE_SIZE,
      },
    },
    Circle: {
      CardPixelOffset: {
        X: CIRCLE_CARD_RIGHT_OFFSET + CIRCLE_CARD_WIDTH / 2,
        Y: -4,
      },
    },
    LineDistance: {
      CardPixelOffset: {
        X: LINE_DISTANCE_CARD_RIGHT_OFFSET + LINE_DISTANCE_CARD_WIDTH / 2,
        Y: (isTrajectory: boolean) =>
          isTrajectory
            ? LineDistanceCardHeight.MEDIUM
            : LineDistanceCardHeight.SMALL,
      },
    },
  },
};