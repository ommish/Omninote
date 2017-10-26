import React from 'react';
import SideNav from './sidenav/sidenav_container';
import TestEditor from './notes/editor/test';


class App extends React.Component {

  render () {
    return (
      <div className="app-page">
        <SideNav />
        <section className="notes-index"><h1>Notes index will go here</h1></section>
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
