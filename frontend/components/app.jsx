import React from 'react';
import SideNav from './sidenav/sidenav_container';

class App extends React.Component {

  render () {
    return (
      <div className="app-page">
        <SideNav />
        <section className="notes-index"><h1>Notes index will go here</h1></section>
        <main
          className={this.props.sidemenuOpen ? "disabled" : ""}
          onClick={this.props.sidemenuOpen ? this.props.toggleSidemenu : () => {} }>
          <form className="note-editor">
            <input placeholder="Title" type="text" className="title"/>
            <textarea placeholder="New note" className="quill"/>
          </form>
        </main>
      </div>
    );
  }
}

export default App;
