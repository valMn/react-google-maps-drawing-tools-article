interface VertexWithChangedCoordinates {
  prevCoordinates: google.maps.LatLngLiteral[];
  currentCoordinates: google.maps.LatLngLiteral[];
}

const getVertexWithChangedCoordinates = ({
  prevCoordinates,
  currentCoordinates,
}: VertexWithChangedCoordinates) =>
  currentCoordinates.find(
    ({ lat: prevLat, lng: prevLng }) =>
      !prevCoordinates.some(
        ({ lat: currLat, lng: currLng }) =>
          prevLat === currLat && prevLng === currLng
      )
  );

interface Props {
  event: google.maps.MapMouseEvent;
  prevCoordinates: google.maps.LatLngLiteral[];
  currentCoordinates: google.maps.LatLngLiteral[];
}

export const processOnVertexOrEdgeClick = ({
  event,
  prevCoordinates,
  currentCoordinates,
}: Props) => {
  const isClickedOnEdgeOrVertex =
    event.edge !== undefined || event.vertex !== undefined;

  /**
   * `Polygon` doesn't have `onVertexClick` or `onEdgeClick` events. We need to differentiate between clicks
   * performed on Polygon, vertices and edges. We compare `currentCoordinates` and `prevCoordinates` to find
   * a changed vertex.
   */
  const vertexWithChangedCoordinates = getVertexWithChangedCoordinates({
    prevCoordinates,
    currentCoordinates,
  });

  return { isClickedOnEdgeOrVertex, vertexWithChangedCoordinates };
};
