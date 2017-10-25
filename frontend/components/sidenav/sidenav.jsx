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

    return (
      <nav className="sidenav">
        <ul className="sidenav-ul">
          <li><button onClick={() => {}} className="circle-button">LOGO</button></li>
          <li><button onClick={() => {}} className="circle-button">+</button></li>
          <li><button onClick={() => {}} className="circle-button">Notes</button></li>
          <NBSidemenu />
          <li><button onClick={() => {}} className="circle-button">TAGS</button></li>
          <li><button onClick={this.props.logout} className="circle-button">ACC</button></li>
        </ul>
      </nav>
    );
  }

}

export default SideNav;
