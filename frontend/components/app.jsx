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

  componentDidMount() {
    this.props.fetchAll();
  }

  componentWillReceiveProps(newProps) {
    if (this.props.location.pathname !== newProps.location.pathname) {
      if (newProps.match.params.notebookId) {
        this.toggleSelectedNotebook(this.props.notebooks[newProps.match.params.notebookId]);
      } else if (newProps.match.params.noteId) {
        this.toggleSelectedNotebook(this.props.notes[newProps.match.params.noteId].notebookId);
      }
    }
  }

  render () {
    return (
      <div className="app-page">
        <SideNav />
        <Switch>
          <Route path="/notes" component={AllNotes} />
          <Route path="/notebooks/:notebookId" component={NotebookNotes} />
        </Switch>
        <main className="note-editor">
            <Route path="/" component={Editor} />
        </main>
      </div>
    );
  }
}

export default App;
