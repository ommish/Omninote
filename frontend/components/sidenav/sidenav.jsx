import React from 'react';
import { Link } from 'react-router-dom';
import NBSidemenu from '../sidemenu/sidemenu_notebook_container';

//
// SideNav
//
// SideNav
// Route:
// /notes
// /notes/new
// /notes/:id
// /notebooks/:id
// /notebooks/:notebookId/:noteId
// /taggednotes/:tagId /taggednotes/:tagId/:noteId
// /taggednotes/:tagId/:noteId
// logo, new note button, notes index button, notebooks index button, tags index button

class SideNav extends React.Component {
  // parents.push(document.getElementById("react-root")); <-- this didn't work for some reason?

  constructor (props) {
    super(props);
  }
  render () {
    const parents = [];
    parents.push(document.getElementsByTagName("html")[0]);
    parents.push(document.getElementsByTagName("body")[0]);
    parents.push(document.getElementById('root'));

    parents.forEach((parent) => {
      $(parent).addClass("app-parent");
    });

    return (
      <nav className="sidenav">
        <ul>
          <button onClick={() => {}} className="circle-button">LOGO</button>
          <button onClick={() => {}} className="circle-button">+</button>
          <button onClick={() => {}} className="circle-button">Notes</button>
          <NBSidemenu/>
          <button onClick={() => {}} className="circle-button">TAGS</button>
          <button onClick={this.props.logout} className="circle-button">ACC</button>
        </ul>
      </nav>
    );
  }


}

export default SideNav;
