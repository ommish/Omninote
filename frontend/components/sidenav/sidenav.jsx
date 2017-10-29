import React from 'react';
import { Link } from 'react-router-dom';
import NBSidemenu from '../sidemenu/sidemenu_notebook_container';

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

  render () {

    return (
      [<nav key={1} className="sidenav">
        <ul className="sidenav-icon-list">
          <li>LOGO</li>
          <li><button onClick={this.newNote} className="circle-button">
            <img className="sidenav-icon" src={window.staticAssets.greenPlus}/>
          </button></li>
        <li><button onClick={this.redirectToAllNotes} className="circle-button">
            <img className="sidenav-icon" src={window.staticAssets.notes}/>
          </button></li>
        <li>
            <button
              className="circle-button"
              onClick={this.props.toggleSidemenu}>
              <img className="sidenav-icon" src={window.staticAssets.notebook}/>
            </button></li>
          <li><button onClick={() => {}} className="circle-button">
            <img className="sidenav-icon" src={window.staticAssets.tag}/>
          </button></li>
          <li><button onClick={this.props.logout} className="circle-button">
            <img className="sidenav-icon" src={window.staticAssets.account}/>
          </button></li>
        </ul>
      </nav>,
      <NBSidemenu key={2}/>]
    );
  }

}

export default SideNav;
