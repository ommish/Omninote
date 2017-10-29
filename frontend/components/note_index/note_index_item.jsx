import React from 'react';
import { NavLink } from 'react-router-dom';
import DeleteForm from '../entity_forms/delete_form_container';

class NoteIndexItem extends React.Component {

  handleClick (id) {
    return (e) => {
      if (e.target.id === "delete") {
        this.props.toggleDeleteForm(id);
        e.stopPropagation();
      } else {
        const path = this.props.match.params.notebookId ?
        `/notebooks/${this.props.match.params.notebookId}/notes/${this.props.note.id}` :
        `/notes/${this.props.note.id}`;
        this.props.history.push(path);
        e.stopPropagation();
      }
    };
  }

  render () {

    return (
      <div className={this.props.note.id === parseInt(this.props.match.params.noteId) ?
          "note-item active" :
          "note-item" }
          onClick={this.handleClick()}>
          <ul className="note-info">
            <li className="note-item-title">{this.props.note.title}</li>
            <li className="note-item-date-"><p>{new Date(this.props.note.updatedAt).toDateString()}</p></li>
            <li className="note-item-body-snippet"><p>{this.props.bodySnippet}</p></li>
          </ul>
          <div>
            <img
              id="delete"
              className="trash-icon"
              onClick={this.handleClick(this.props.note.id)}
              src={window.staticAssets.trash}/>
          </div>
          <DeleteForm
            item={this.props.note}
            itemType="note"/>
        </div>
      );
    }
  }

  export default NoteIndexItem;
