import React from 'react';
import NoteIndexItem from './note_index_item_container';
import NoteOrderOptionMenu from './note_order_options_container';

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
        <ul>
          {notes}
        </ul>
      </section>
    );
  }
}

export default NoteIndex;
