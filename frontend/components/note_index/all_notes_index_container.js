import { connect } from 'react-redux';
import NoteIndex from './note_index';
import { sortNotes } from '../../util/sorters';

const mapStateToProps = (state, ownProps) => {
  const noteOrder = state.ui.noteOrder;
  const noteIndexHeader = "NOTES";
  const notes = sortNotes(Object.values(state.entities.notes), noteOrder);
  return {
    noteIndexHeader,
    notes,
    noteOrder,
  };
};

export default connect(mapStateToProps, null)(NoteIndex);
