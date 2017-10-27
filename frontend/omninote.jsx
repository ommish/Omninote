import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import * as NoteActions from './actions/note_actions';

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
  window.fetchNotes = NoteActions.fetchNotes;
  window.fetchNote = NoteActions.fetchNote;
  window.createNote = NoteActions.createNote;
  window.updateNote = NoteActions.updateNote;
  window.deleteNote = NoteActions.deleteNote;
  ReactDOM.render(<Root store={store}/>, root);
});
