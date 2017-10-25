import React from 'react';

class NotebookIndexItem extends React.Component {

  render () {
    return (
      <li className="notebook-index-item" onClick={this.props.toggleSidemenu}>
        <h4>{this.props.notebook.title}</h4>
        <p>{new Date(this.props.notebook.updatedAt).toDateString()}</p>
        <p>{this.props.notebook.noteIds.length} notes</p>
      </li>
    );
  }
}

export default NotebookIndexItem;
