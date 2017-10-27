import React from 'react';
import SideNav from './sidenav/sidenav_container';
import Editor from './editor/editor';
import AllNotes from './note_index/all_notes_index_container';
import NotebookNotes from './note_index/notebook_notes_index_container';
import { Route, Switch } from 'react-router-dom';

class App extends React.Component {

  componentDidMount() {
    this.props.fetchAll();
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
          <button className="notebook-selector">Select Notebook</button>
          <form>
            <input placeholder="Title your note" type="text" className="title"/>
            <Editor />
          </form>
        </main>
      </div>
    );
  }
}

export default App;
