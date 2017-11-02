import React from 'react';
import SideNav from './sidenav/sidenav_container';
import Editor from './editor/editor_container';
import AllNotes from './note_index/all_notes_index_container';
import NotebookNotes from './note_index/notebook_notes_index_container';
import TagNotes from './note_index/tag_notes_index_container';
import { Route, Switch } from 'react-router-dom';
import MDSpinner from 'react-md-spinner';

class App extends React.Component {

  componentDidMount() {
    this.props.fetchAll().then(() => {
      if (this.props.match.params.notebookId) {
        this.props.toggleSelectedNotebook(this.props.notebooks[this.props.match.params.notebookId]);
      } else if (this.props.match.params.noteId) {
        const notebookId = this.props.notes[this.props.match.params.noteId].notebookId;
        this.props.toggleSelectedNotebook(this.props.notebooks[notebookId]);
      }
    });
  }

  componentWillReceiveProps(newProps) {
    if (!this.props.notebooks.initialState) {
      const currentNotebookId = this.props.match.params.notebookId;
      const currentNoteId = this.props.match.params.noteId;
      const newNotebookId = newProps.match.params.notebookId;
      const newNoteId = newProps.match.params.noteId;

      // toggle to new notebook if visiting a different notebook
      if (newNotebookId && currentNotebookId !== newNotebookId) {
        const notebook = this.props.notebooks[newNotebookId];
        this.props.toggleSelectedNotebook(notebook);
      }
      // toggle to new notebook if visiting a different note
      else if (!newNotebookId && newNoteId) {
        const notebook = this.props.notebooks[this.props.notes[newNoteId].notebookId];
        this.props.toggleSelectedNotebook(notebook);
      // toggle to no notebook if going to all notes
    } else if (newProps.location.pathname === "/notes") {
        this.props.toggleSelectedNotebook({id: false});
      }
    }
  }

  render () {
    if (this.props.initialState) {
      return (
        <div className="loading-page">
          <h1>Just a moment!</h1>
          <MDSpinner singleColor="rgb(76, 175, 80)" size={50} duration={3000}/>
        </div>
      );
    }

    else {
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
  }

  export default App;
