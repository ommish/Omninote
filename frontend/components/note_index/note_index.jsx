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

  componentWillReceiveProps(newProps) {
    if (this.props.location.pathname !== newProps.location.pathname) {
      this.setState({searchQuery: ""});
    }
  }

  handleSearchInput(e) {
    const newState = {searchQuery: e.target.value};
    this.setState(newState);
  }

  render () {
    let notes = this.props.notes.map((note) => {
      if ((note.bodyPlain.toLowerCase().includes(this.state.searchQuery.toLowerCase()))
        || (note.title.toLowerCase().includes(this.state.searchQuery.toLowerCase()))) {
        return (
          <NoteIndexItem
            note={note}
            key={note.id} />
        );
      }});
    if (notes.length < 1) {
      notes = <div className="no-items">Click + to add a new note!</div>;
    }

    return (
      <section className={this.props.fullEditor ? "note-index closed-index" : "note-index"}>
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
