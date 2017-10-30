

import React from 'react';
import { Link } from 'react-router-dom';
import Sidemenu from '../sidemenu/sidemenu_container';

class SideNav extends React.Component {

  constructor (props) {
    super(props);
    this.redirectToAllNotes = this.redirectToAllNotes.bind(this);
    this.newNote = this.newNote.bind(this);
  }

  redirectToAllNotes() {
    this.props.history.push('/notes');
  }

  newNote () {
    let path;
    if (this.props.match.params.notebookId) {
      path = `/notebooks/${this.props.match.params.notebookId}`;
    } else {
      path = '/notes';
    }
    this.props.history.push(path);
    this.props.toggleFullEditor();
  }

  toggleSidemenu(itemType) {
    return (e) => {
      if (itemType === "tag") {
        this.props.toggleSidemenuItemType("tag");
      } else if (itemType === "notebook"){
      this.props.toggleSidemenuItemType("notebook");
      }
    this.props.toggleSidemenu();
  };
  }

  render () {
    return (
      [<nav
        className="sidenav"
        key={1}>
      <ul className="sidenav-icon-list">
        <li>
          <img
            className="sidenav-logo"
            src="https://png.icons8.com/elephant/ios7/100/666666"/>
        </li>
        <li>
          <button
            onClick={this.newNote}
            className="circle-button">
            <img
              className="sidenav-icon"
              src={window.staticAssets.greenPlus}/>
          </button>
        </li>
        <li>
          <button
            onClick={this.redirectToAllNotes}
            className="circle-button">
            <img
              className="sidenav-icon"
              src={window.staticAssets.notes}/>
          </button>
        </li>
        <li>
          <button
            className="circle-button"
            onClick={this.toggleSidemenu("notebook")}>
            <img
              className="sidenav-icon"
              src={window.staticAssets.notebook}/>
          </button>
        </li>
        <li>
          <button
            className="circle-button"
            onClick={this.toggleSidemenu("tag")}>
            <img
              className="sidenav-icon"
              src={window.staticAssets.tag}/>
          </button>
        </li>
        <li>
          <button
            onClick={this.props.logout}
            className="circle-button">
            <img
              className="sidenav-icon"
              src={window.staticAssets.account}/>
          </button>
        </li>
      </ul>
    </nav>,
    <Sidemenu
      itemType={this.props.sidemenuItemType}
      key={2}/>]
    );
  }
}

export default SideNav;


// <TagSidemenu key={3}/>]
