import React from 'react';
import NoteIndexItem from './note_index_item_container';
import NoteOrderOptionMenu from './note_order_options_container';
import DeleteForm from '../entity_forms/delete_form_container';

class NoteIndex extends React.Component {

  render () {

    const notes = this.props.notes.map((note) => (
      <NoteIndexItem
        note={note}
        key={note.id} />
    ));

    return (
      <section className="note-index">
        <div className="note-index-heading">
          {this.props.noteIndexHeader}
        </div>
        <NoteOrderOptionMenu />
        <ul className="note-item-container">
          {notes}
        </ul>
        <DeleteForm itemType="note"/>
      </section>
    );
  }
}

export default NoteIndex;
