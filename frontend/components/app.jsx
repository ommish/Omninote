import React from 'react';
import SideNav from './sidenav/sidenav_container';
import Editor from './editor/editor_container';
import AllNotes from './note_index/all_notes_index_container';
import NotebookNotes from './note_index/notebook_notes_index_container';
import { Route, Switch } from 'react-router-dom';

class App extends React.Component {

  componentWillReceiveProps(newProps) {
    let notebookId;
    let notebook;
    let noteId;
    let note;

    if (this.props.location.pathname !== newProps.location.pathname) {
      if (newProps.location.pathname.startsWith("/notebooks/")) {
        notebookId = newProps.location.pathname.split("/")[2];
        notebook = this.props.notebooks[notebookId];
        this.props.toggleSelectedNotebook(notebook);
        if (newProps.location.pathname.includes("/notes/")) {
          noteId = newProps.location.pathname.split("/")[4];
          note = this.props.notes[noteId];
          this.props.toggleSelectedNote(note);
        }
      }
      else if (newProps.location.pathname.startsWith("/notes/")) {
        noteId = newProps.location.pathname.split("/")[2];
        notebookId = this.props.notes[noteId].notebookId;
        note = this.props.notes[noteId];
        notebook = this.props.notebooks[notebookId];
        this.props.toggleSelectedNotebook(notebook);
        this.props.toggleSelectedNote(note);
      }
    }
  }

  render () {

    if (this.props.notebooks.initialState) {
      this.props.fetchAll();
    }

//refreshing on notebooks/:noteId brings you back to /notes
    return (
      <div className="app-page">
        <SideNav />
        <Switch>
          <Route path="/notebooks/:notebookId" component={NotebookNotes} />
          <Route path="/notes/:noteId" component={AllNotes} />
          <Route path="/notes" component={AllNotes} />
        </Switch>
        <main className="note-editor">
            <Route path="/" component={Editor} />
        </main>
      </div>
    );
  }
}

export default App;
