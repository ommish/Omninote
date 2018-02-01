import React from 'react';

class NoteOrderOptions extends React.Component {

  constructor(props) {
    super(props);
    this.toggleNoteOrderDropdown = this.toggleNoteOrderDropdown.bind(this);
  }

  toggleNoteOrderDropdown (e) {
    e.stopPropagation();
    this.props.toggleNoteOrderDropdown();
  }

  toggleNoteOrder (order) {
    return (e) => {
      this.props.toggleNoteOrder(order);
      this.toggleNoteOrderDropdown(e);
    };
  }

  render () {
    const options = this.props.options.map((option, i) => (
      <button onClick={this.toggleNoteOrder(i)}
        className={i === this.props.noteOrder ? "note-order selected" : "note-order"}
        key={i}>
        {option}
      </button>)
    );
    return (
      [
      <div className="sort-option-div" key="0">
        <div
          className="sort-button"
          onClick={this.toggleNoteOrderDropdown}>
          Options ▾
            <ul className={this.props.noteOrderDropdown ? "order-dropdown" : "order-dropdown-closed"}>
              {options}
            </ul>
        </div>
      </div>,
      <div className={this.props.noteOrderDropdown ? ".order-dropdown-overlay" : "order-dropdown-overlay-closed"}
      onClick={this.toggleNoteOrderDropdown}
      key="1">
      </div>
    ]
  );
  }
}


export default NoteOrderOptions;
