import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import * as NotebookActions from './actions/notebook_actions';

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
  window.fetchNotebooks = NotebookActions.fetchNotebooks;
  window.fetchNotebook = NotebookActions.fetchNotebook;
  window.createNotebook = NotebookActions.createNotebook;
  window.updateNotebook = NotebookActions.updateNotebook;
  window.deleteNotebook = NotebookActions.deleteNotebook;
  ReactDOM.render(<Root store={store}/>, root);
});
