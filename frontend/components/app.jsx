import React from 'react';
import SideNav from './sidenav/sidenav_container';
import Sidemenu from './sidemenu/sidemenu_container';
import Editor from './editor/editor_container';
import AllNotes from './note_index/all_notes_index_container';
import FilteredNotes from './note_index/filtered_notes_index_container';
import { Route, Switch, Redirect } from 'react-router-dom';
import MDSpinner from 'react-md-spinner';
import CreateForm from './entity_forms/create_form_container';
import LogoutForm from './session/logout_form_container';
import MapView from './map_view/map_view_container';
import NotesInMap from './note_index/notes_in_map_container';

class App extends React.Component {

  componentDidMount() {
    this.props.fetchAll();
  }

  render () {
    if (this.props.initialState) {
      return (
        <div className="loading-page">
          <h1>Just a moment!</h1>
          <MDSpinner singleColor="rgb(76, 175, 80)" size={50} duration={5000}/>
        </div>
      );
    } else if (this.props.notFound) {
      return (
        <Redirect to="/notes" />
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
