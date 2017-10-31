import React from 'react';
import SideNav from './sidenav/sidenav_container';
import Editor from './editor/editor_container';
import AllNotes from './note_index/all_notes_index_container';
import NotebookNotes from './note_index/notebook_notes_index_container';
import TagNotes from './note_index/tag_notes_index_container';
import { Route, Switch } from 'react-router-dom';

class App extends React.Component {

  componentDidMount() {
    this.props.fetchAll();
  }

  componentWillReceiveProps(newProps) {
    const currentNotebookId = this.props.match.params.notebookId;
    const newNotebookId = newProps.match.params.notebookId;
    const newNoteId = newProps.match.params.noteId;

    if (currentNotebookId !== newNotebookId) {
      const notebook = this.props.notebooks[newNotebookId];
      if (notebook) {
        this.props.toggleSelectedNotebook(notebook);
      } else {
        this.props.toggleSelectedNotebook({id: null});
      }
    }
    if (!newNotebookId && newNoteId) {
      const notebook = this.props.notebooks[this.props.notes[newNoteId].notebookId];
      this.props.toggleSelectedNotebook(notebook);
    }
  }

render () {

  // refreshing on notebooks/:noteId brings you back to /notes ???
  return (
    <div className="app-page">
      <SideNav />
      <Switch>
        <Route path="/notebooks/:notebookId/notes/:noteId" component={NotebookNotes} />
        <Route path="/notebooks/:notebookId" component={NotebookNotes} />
        <Route path="/tags/:tagId/notes/:noteId" component={TagNotes} />
        <Route path="/tags/:tagId" component={TagNotes} />
        <Route path="/notes/:noteId" component={AllNotes} />
        <Route path="/" component={AllNotes} />
      </Switch>
        <Switch>
          <Route path="/notebooks/:notebookId/notes/:noteId" component={Editor} />
          <Route path="/notebooks/:notebookId" component={Editor} />
          <Route path="/tags/:tagId/notes/:noteId" component={Editor} />
          <Route path="/tags/:tagId" component={Editor} />
          <Route path="/notes/:noteId" component={Editor} />
          <Route path="/" component={Editor} />
        </Switch>
    </div>
  );}
}

export default App;
