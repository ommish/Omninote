import React from 'react';
import NoteIndexItem from './note_index_item_container';
import { NoteIndexHeading } from './note_index_heading';

class NoteIndex extends React.Component {

  render () {
    let notes = this.props.notes.map((note) => (
      <NoteIndexItem
        notebook={this.props.notebook}
        note={note}
        key={note.id} />
    ));
    let heading;
    if (this.props.notebook) {
      heading = this.props.notebook.title;
    } else {
      heading = "NOTES";
    }
    return (
      <section className="note-index">
        <NoteIndexHeading heading={heading} />
        <ul>
          {notes}
        </ul>
      </section>
    );
  }
}

export default NoteIndex;
