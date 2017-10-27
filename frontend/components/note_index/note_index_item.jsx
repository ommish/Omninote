import React from 'react';

class NoteIndexItem extends React.Component {



  render () {
    <li>
      {this.props.note.title}
      {this.props.note.updatedAt}
    </li>
  }
}
