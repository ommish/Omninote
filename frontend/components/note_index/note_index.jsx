import React from 'react';
import NoteIndexItem from './note_index_item_container';
import NoteOrderOptionMenu from './note_order_options_container';
import DeleteForm from '../entity_forms/delete_form_container';

class NoteIndex extends React.Component {

  constructor() {
    super();
    this.state = { searchQuery: "" };
    this.handleSearchInput = this.handleSearchInput.bind(this);
  }

  handleSearchInput(e) {
    const newState = {searchQuery: e.target.value};
    this.setState(newState);
  }

  render () {
    const notes = this.props.notes.map((note) => {
      if (!note) {
        return;
      }
      if ((note.bodyPlain.toLowerCase().includes(this.state.searchQuery.toLowerCase()))
        || (note.title.toLowerCase().includes(this.state.searchQuery.toLowerCase()))) {
        return (
          <NoteIndexItem
            note={note}
            key={note.id} />
        );
      }});

    return (
      <section className="note-index">
        <div className="note-index-heading">
          {this.props.noteIndexHeader}
        </div>
        <input type="text"
          className="search-bar"
          onChange={this.handleSearchInput}
          placeholder="Search notes"
          value={this.state.searchQuery}/>
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
