import { connect } from 'react-redux';
import NoteIndex from './note_index';
import { sortItems } from '../../util/sorters';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state, ownProps) => {
  const searchQuery = ownProps.match.params.flagIds.split(",").map((id) => parseInt(id));
  let notes = [];
  const noteIds = [];
  searchQuery.forEach((flagId) => {
    state.entities.flags[flagId].noteIds.forEach((noteId) => noteIds.push(noteId));
  });
  if (searchQuery !== "nonefound") {
    notes = sortItems(
      noteIds.map((noteId) => state.entities.notes[noteId]),
      noteOrder
    );
  }
  const noteOrder = state.ui.noteOrder;
  const fullEditor = state.ui.fullEditor;
  const noteIndexHeader = `Filtered notes by location`;

  return {
    noteIndexHeader,
    notes,
    noteOrder,
    fullEditor,
  };
};

export default withRouter(connect(mapStateToProps, null)(NoteIndex));
