import React from 'react';
import SideNav from './sidenav/sidenav_container';
import TestEditor from './editor/test';
import NoteIndex from './note_index/note_index';


class App extends React.Component {

  render () {
    return (
      <div className="app-page">
        <SideNav />
        <NoteIndex />
        <main className="note-editor">
          <button className="notebook-selector">Select Notebook</button>
          <form>
            <input placeholder="Title your note" type="text" className="title"/>
            <TestEditor />
          </form>
        </main>
      </div>
    );
  }
}

export default App;
