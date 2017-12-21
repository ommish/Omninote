import React from 'react';
import SideNav from './sidenav/sidenav_container';
import Sidemenu from './sidemenu/sidemenu_container';
import Editor from './editor/editor_container';
import AllNotes from './note_index/all_notes_index_container';
import FilteredNotes from './note_index/filtered_notes_index_container';
import { Route, Switch } from 'react-router-dom';
import MDSpinner from 'react-md-spinner';
import CreateForm from './entity_forms/create_form_container';
import LogoutForm from './session/logout_form_container';
import MapView from './map_view/map_view_container';
import NotesInMap from './note_index/notes_in_map_container';

class App extends React.Component {

  componentDidMount() {
    this.props.fetchAll().then(() => {
      if (this.props.match.params.notebookId) {
        this.props.toggleSelectedNotebook(this.props.match.params.notebookId);
      } else if (this.props.match.params.noteId) {
        const notebookId = this.props.notes[this.props.match.params.noteId].notebookId;
        this.props.toggleSelectedNotebook(notebookId);
      }
    });
  }

  componentWillReceiveProps(newProps) {
    const currentNotebookId = this.props.match.params.notebookId;
    const currentNoteId = this.props.match.params.noteId;
    const newNotebookId = newProps.match.params.notebookId;
    const newNoteId = newProps.match.params.noteId

    // toggle to new notebook if visiting a different notebook
    if (newNotebookId && currentNotebookId !== newNotebookId) {
      this.props.toggleSelectedNotebook(newNotebookId);
    }
    // toggle to new notebook if visiting a different note without :notebookId param
    else if (!newNotebookId && newNoteId && currentNoteId !== newNoteId) {
      this.props.toggleSelectedNotebook(this.props.notes[newNoteId].notebookId);
    // toggle to no notebook if going to all notes
  } else if (!this.props.location.pathname === "/notes" && newProps.location.pathname === "/notes") {
      this.props.toggleSelectedNotebook(false);
    }
  }

  render () {
    if (this.props.notes.initialState) {
      return (
        <div className="loading-page">
          <h1>Just a moment!</h1>
          <MDSpinner singleColor="rgb(76, 175, 80)" size={50} duration={5000}/>
        </div>
      );
    }

    else {
      return (
        <div className="app-page">
          <SideNav />
          <Sidemenu />
          <CreateForm itemType={this.props.itemType} />
          <LogoutForm />
          <MapView />
          <Switch>
            <Route path="/searchbylocation/:flagIds" component={NotesInMap} />
            <Route path="/flags/:flagId/notes/:noteId" component={FilteredNotes} />
            <Route path="/flags/:flagId" component={FilteredNotes} />
            <Route path="/notebooks/:notebookId/notes/:noteId" component={FilteredNotes} />
            <Route path="/notebooks/:notebookId" component={FilteredNotes} />
            <Route path="/tags/:tagId/notes/:noteId" component={FilteredNotes} />
            <Route path="/tags/:tagId" component={FilteredNotes} />
            <Route path="/notes/:noteId" component={AllNotes} />
            <Route path="/" component={AllNotes} />
          </Switch>
          <Switch>
            <Route path="/searchbylocation/:flagIds" component={Editor} />
            <Route path="/flags/:flagId/notes/:noteId" component={Editor} />
            <Route path="/flags/:flagId" component={Editor} />
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
