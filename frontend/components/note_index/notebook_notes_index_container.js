import { connect } from 'react-redux';
import NoteIndex from './note_index';

const mapStateToProps = (state, ownProps) => {
  const notebook = state.entities.notebooks[ownProps.match.params.notebookId];
  const noteOrder = state.ui.noteOrder;
  const noteIndexHeader = notebook.title;
  let notes = [];
  const noteIds = notebook.noteIds;
  noteIds.forEach((noteId) => notes.push(state.entities.notes[noteId]));
  return {
    noteIndexHeader,
    notes,
    noteOrder,
  };
};

export default connect(mapStateToProps, null)(NoteIndex);
