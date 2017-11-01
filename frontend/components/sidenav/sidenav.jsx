import React from 'react';
import { Link } from 'react-router-dom';
import Sidemenu from '../sidemenu/sidemenu_container';

class SideNav extends React.Component {

  constructor (props) {
    super(props);
    this.redirectToAllNotes = this.redirectToAllNotes.bind(this);
    this.newNote = this.newNote.bind(this);
    this.toggleSidemenu = this.toggleSidemenu.bind(this);
  }

  redirectToAllNotes() {
    if (this.props.sidemenuOpen) {
      this.props.toggleSidemenu();
    }
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
      if ((itemType === this.props.sidemenuItemType) && (this.props.sidemenuOpen)) {
        this.props.toggleSidemenu();
      } else if (!this.props.sidemenuOpen) {
        this.props.toggleSidemenu();
      }
      if (itemType === "tag") {
        this.props.toggleSidemenuItemType("tag");
      } else if (itemType === "notebook"){
        this.props.toggleSidemenuItemType("notebook");
      }
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
            <div className="sidenav-tooltip">New Note</div>
          </button>
        </li>
        <li>
          <button
            onClick={this.redirectToAllNotes}
            className="circle-button">
            <img
              className="sidenav-icon"
              src={window.staticAssets.notes}/>
            <div className="sidenav-tooltip">All Notes</div>
          </button>
        </li>
        <li>
          <button
            className="circle-button"
            onClick={this.toggleSidemenu("notebook")}>
            <img
              className="sidenav-icon"
              src={window.staticAssets.notebook}/>
            <div className="sidenav-tooltip">Notebooks</div>
          </button>
        </li>
        <li>
          <button
            className="circle-button"
            onClick={this.toggleSidemenu("tag")}>
            <img
              className="sidenav-icon"
              src={window.staticAssets.tag}/>
            <div className="sidenav-tooltip">Tags</div>
          </button>
        </li>
        <li>
          <button
            onClick={this.props.logout}
            className="circle-button">
            <img
              className="sidenav-icon"
              src={window.staticAssets.account}/>
            <div className="sidenav-tooltip">Log Out</div>
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
