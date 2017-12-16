import { connect } from 'react-redux';
import NoteIndex from './note_index';
import { sortItems } from '../../util/sorters';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state, ownProps) => {
  const searchQuery = ownProps.match.params.flagIds.split(",").map((id) => parseInt(id));
  let notes = Object.values(state.entities.notes).filter((note) => searchQuery.includes(note.flagId));
  notes = sortItems(notes, noteOrder);

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
