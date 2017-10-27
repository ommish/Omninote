import React from 'react';
import Modal from 'react-modal';

class NoteOrderOptions extends React.Component {

  render () {
    const options = this.props.options.map((option, i) => <li key={i}>{option}</li>)
    return (
    <div>
      <button
        className="sort-button"
        onClick={this.props.toggleNoteOrderDropdown}>
        Options ▾
      </button>
      <Modal
        isOpen={this.props.noteOrderDropdown}
        onRequestClose={this.props.toggleNoteOrderDropdown}
        className={{
        base: '',
        afterOpen: 'order-dropdown',
        beforeClose: 'order-dropdown-closed'}}
        overlayClassName={{
        base: '',
        afterOpen: 'order-dropdown-overlay',
        beforeClose: 'order-dropdown-overlay-closed'}}>
        <ul>
          {options}
        </ul>
      </Modal>
    </div>
  );
  }

}


export default NoteOrderOptions;
