import React from 'react';
import { NavLink } from 'react-router-dom';

class NoteIndexItem extends React.Component {

  render () {
    return (
      <NavLink to={
          this.props.match.params.notebookId ?
          `/notebooks/${this.props.match.params.notebookId}/notes/${this.props.note.id}` :
          `/notes/${this.props.note.id}`}
          activeClassName="active-note-item">
        <div
          className="note-item">
          <ul>
            <li className="note-item-title">{this.props.note.title}</li>
            <li className="note-item-date-"><p>{new Date(this.props.note.updatedAt).dateString}</p></li>
            <li className="note-item-body-snippet"><p>{this.props.bodySnippet}</p></li>
          </ul>
        </div>
      </NavLink>
    );
  }
}

export default NoteIndexItem;
