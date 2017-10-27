import React from 'react';
import NoteIndexItem from './note_index_item_container';

class NoteIndex extends React.Component {

  constructor(props) {
    super(props);
    this.state = this.props;
  }

  componentWillReceiveProps(newProps) {
    if (this.props.location.pathname !== newProps.location.pathname) {
      this.setState(newProps);
    }
  }

  render () {
    let notes = this.props.notes.map((note) => <li>{note.title}</li>);
    notes.sort(); //have to sort by this.props.noteOrder
    return (
      <section className="note-index">
        <ul>
          {notes}
        </ul>
      </section>
    );
  }
}

export default NoteIndex;
