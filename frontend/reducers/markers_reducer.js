import { RECEIVE_FLAG, REMOVE_FLAG, RECEIVE_FLAGS } from '../actions/flag_actions';
import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import { RECEIVE_NOTE, REMOVE_NOTE } from '../actions/note_actions';
import { createMarkers, createMarker, updateMarker, removeMarker } from '../util/marker_util';

const initialState = {googleMap: null, markers: {}, infoWindow: null};

const MarkersReducer = (oldState = initialState, action) => {
  let newState = Object.assign({}, oldState);
  let newMarker;
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
    if (!action.currentUser) {
      return initialState;
    } else {
      return oldState;
    }
    break;
    case RECEIVE_FLAGS:
    const newMarkers = createMarkers(action.flags, action.googleMap, action.infoWindow, action.notes);
    return Object.assign({}, {googleMap: action.googleMap, markers: newMarkers, infoWindow: action.infoWindow});
    case RECEIVE_FLAG:
    newMarker = createMarker(action.flag, newState.googleMap, newState.infoWindow);
    newState.markers[action.flag.id] = newMarker;
    return newState;
    case REMOVE_FLAG:
    removeMarker(newState.markers[action.flag.id]);
    delete newState.markers[action.flag.id];
    return newState;
    case RECEIVE_NOTE:
    if (action.flags) {
      Object.values(action.flags).forEach((flag) => {
        newMarker = updateMarker(flag, newState.markers[flag.id], action.note);
        newState.markers[flag.id] = newMarker;
      });
    }
    return newState;
    case REMOVE_NOTE:
    let flag = Object.values(action.flags)[0];
    newMarker = updateMarker(flag, newState.markers[flag.id], action.note);
    newState.markers[flag.id] = newMarker;
    return newState;
    default:
    return oldState;
  }
};

export default MarkersReducer;
