import React from 'react';
import { NavLink } from 'react-router-dom';

class NoteIndexItem extends React.Component {

  render () {
    return (
      <li className="note-index-item">
        <NavLink
          to={`/${this.props.holderType}/${this.props.holder.id}/notes/${this.props.note.id}`}
          activeClassName="active-note-index-item">
          <ul>
            <li className="note-index-item-title">{this.props.note.title}</li>
            <li><p>{this.props.note.updatedAt}</p></li>
            <li><p>{this.props.bodySnippet}</p></li>
          </ul>
        </NavLink>
      </li>
    );
  }
}
export default NoteIndexItem;
