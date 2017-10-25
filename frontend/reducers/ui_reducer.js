import { TOGGLE_SIDEMENU, TOGGLE_FULLSCREEN, TOGGLE_NOTEBOOK_DROPDOWN } from '../actions/ui_actions';

const initialState = {};

const UIReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case TOGGLE_SIDEMENU:
    return;
    case TOGGLE_FULLSCREEN:
    return;
    case TOGGLE_NOTEBOOK_DROPDOWN:
    return;
    default:
    return state;
  }
};

export default UIReducer;
