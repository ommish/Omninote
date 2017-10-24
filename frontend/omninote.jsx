import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import * as SessionApi from './actions/session_actions';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  let store;
  if (window.currentUser) {
    const preloadedState = { session: { currentUser: window.currentUser } };
    delete window.currentUser;
    store = configureStore(preloadedState);
  } else {
    store = configureStore();
  }
  window.store = store;
  window.logout = SessionApi.logout;
  ReactDOM.render(<Root store={store}/>, root);
});
