import {
  addRoutesInfo,
  addDirectionsInfo,
  addStopsInfo,
  addNewBusToTrack,
  syncBussesToTrackFromLocalStorage,
} from "./routesActions";

export function reducer(state, action) {
  const { payload } = action;
  switch (action.type) {
    case "ADD_ROUTES_INFO":
      return addRoutesInfo(state, payload.routesInfo);

    case "ADD_DIRECTIONS_INFO":
      return addDirectionsInfo(state, payload.directionsInfo);

    case "ADD_STOPS_INFO":
      return addStopsInfo(state, payload.stopsInfo);

    case "ADD_NEW_BUS_TO_TRACK":
      return addNewBusToTrack(state, payload.newBusInfo);

    case "SYNC_BUSSES_TO_TRACK_FROM_LOCAL_STORAGE":
      return syncBussesToTrackFromLocalStorage(state);

    default:
      return state;
  }
}
