import React from 'react';
import SideNav from './sidenav/sidenav_container';
import Editor from './editor/editor_container';
import AllNotes from './note_index/all_notes_index_container';
import NotebookNotes from './note_index/notebook_notes_index_container';
import { Route, Switch } from 'react-router-dom';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.toggleSelectedNotebook = this.props.toggleSelectedNotebook.bind(this);
  }

  componentWillReceiveProps(newProps) {
    if (this.props.location.pathname !== newProps.location.pathname) {
      if (newProps.match.params.notebookId) {
        this.toggleSelectedNotebook(this.props.notebooks[newProps.match.params.notebookId]);
      } else if (newProps.match.params.noteId) {
        const noteId = newProps.match.params.noteId;
        const notebookId = this.props.notes[noteId].notebookId;
        const notebook = this.props.notebooks[notebookId];
        this.toggleSelectedNotebook(notebook);
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
