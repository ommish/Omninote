import React from 'react';
import SideNav from './sidenav/sidenav_container';

const App = (props) => (
  <div className="app-page">
    <SideNav />
    <section><h1>SideMenu will go here</h1></section>
    <main>
      <form className="noteEditor">
        <input placeholder="Title" type="text" className="title"/>
        <textarea placeholder="New note" className="quill"/>
      </form>
    </main>
  </div>
);

export default App;
