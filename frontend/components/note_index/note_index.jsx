import React from 'react';
import NoteIndexItem from 'note_index_item_container';
import Modal from 'react-modal';

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
    let notes = this.props.notes.map((note) => <NoteIndexIem note={note}/>);
    notes.sort(); //have to sort by this.props.noteOrder
    return (
      <section className="note-index">
        <div>
          Notes
        </div>
        <div>
          <span onClick={this.props.toggleOrderDropdown}>Order</span>
          <Modal>
            <ul>
              Order Options List
            </ul>
          </Modal>
          <ul>
            {notes}
          </ul>
        </div>
      </section>
    );
  }
}

export default NoteIndex;
