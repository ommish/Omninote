import React from 'react';
import SideNav from './sidenav/sidenav_container';
import Editor from './editor/editor_container';
import AllNotes from './note_index/all_notes_index_container';
import NotebookNotes from './note_index/notebook_notes_index_container';
import { Route, Switch } from 'react-router-dom';

class App extends React.Component {

  componentWillReceiveProps(newProps) {
    const currentNotebookId = this.props.match.params.notebookId;
    const currentNoteId = this.props.match.params.noteId;
    const newNotebookId = newProps.match.params.notebookId;
    const newNoteId = newProps.match.params.noteId;

    if (((currentNotebookId !== newNotebookId) && (newNotebookId)) ||
    (currentNoteId !== newNoteId)) {
      const notebook = this.props.notebooks[newNotebookId];
      this.props.toggleSelectedNotebook(notebook);
    }
  }

render () {

  if (this.props.notebooks.initialState) {
    this.props.fetchAll();
  }

  // refreshing on notebooks/:noteId brings you back to /notes ???
  return (
    <div className="app-page">
      <SideNav />
      <Switch>
        <Route path="/notebooks/:notebookId/notes/:noteId" component={NotebookNotes} />
        <Route path="/notebooks/:notebookId" component={NotebookNotes} />
        <Route path="/notes/:noteId" component={AllNotes} />
        <Route path="/" component={AllNotes} />
      </Switch>
      <main className="note-editor">
        <Switch>
          <Route path="/notebooks/:notebookId/notes/:noteId" component={Editor} />
          <Route path="/notebooks/:notebookId" component={Editor} />
          <Route path="/notes/:noteId" component={Editor} />
          <Route path="/" component={Editor} />
        </Switch>
      </main>
    </div>
  );}
}

export default App;
