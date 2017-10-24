import { createStore, applyMiddleware } from 'redux';
import { thunk }
import { logger }
import { RootReducer }

const configureStore = (preloadedState = {}) => {
  return createStore(RootReducer, preloadedState, applyMiddleware(thunk, logger));
};

export default configureStore;
