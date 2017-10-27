import React from 'react';

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
    let notes = this.props.notes.map((note) => <li>{note.title}<br></br>{note.body}</li>);
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
