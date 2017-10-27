import { connect } from 'react-redux';
import NoteIndex from './note_index';
import { fetchNotes } from '../../actions/note_actions';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state, ownProps) => {
  const noteOrder = state.ui.noteOrder;
  let noteIds;
  let notes = [];
  let category;

  if (ownProps.location.pathname === "/notebooks/") {
    notes = Object.values(state.entities.notes);
    return {
      category,
      notes,
      noteOrder,
    };
  }
  let notebook;
  let tag;
  const notebookId = ownProps.match.params.notebookId;
  const tagId = ownProps.match.params.tagId;
  if (notebookId) {
    noteIds = state.entities.notebooks[notebookId].noteIds;
    noteIds.forEach((noteId) => notes.push(state.entities.notes[noteId]));
    notebook = state.entities.notebooks[notebookId];
  }
  return {
    notebook,
    notes,
    noteOrder,
  };
};

export default withRouter(connect(mapStateToProps, null)(NoteIndex));
