import { connect } from 'react-redux';
import NoteIndex from './note_index';
import { sortItems } from '../../util/sorters';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state, ownProps) => {
  let notes = [];
  const noteOrder = state.ui.noteOrder;
  if (state.entities.notebooks.initialState) {
    return {
      noteIndexHeader: "",
      notes,
      noteOrder,
    };
  } else {
    const notebook = state.entities.notebooks[ownProps.match.params.notebookId];
    const noteIndexHeader = `Notebook: ${notebook.title}`;
    const noteIds = notebook.noteIds;
    noteIds.forEach((noteId) => notes.push(state.entities.notes[noteId]));
    notes = sortItems(notes, noteOrder);
    return {
      noteIndexHeader,
      notes,
      noteOrder,
    };
  }
};

export default withRouter(connect(mapStateToProps, null)(NoteIndex));
