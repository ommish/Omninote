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
    const notes = this.props.notes.map((note) => <li>{note.title}<br></br>{note.body}</li>);
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
