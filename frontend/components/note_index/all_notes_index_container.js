import { connect } from 'react-redux';
import NoteIndex from './note_index';

const mapStateToProps = (state, ownProps) => {
  const noteOrder = state.ui.noteOrder;
  const noteIndexHeader = "NOTES";
  const notes = Object.values(state.entities.notes);
  return {
    noteIndexHeader,
    notes,
    noteOrder,
  };
};

export default connect(mapStateToProps, null)(NoteIndex);
