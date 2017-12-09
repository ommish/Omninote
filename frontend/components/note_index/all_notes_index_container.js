import { connect } from 'react-redux';
import NoteIndex from './note_index';
import { sortItems } from '../../util/sorters';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state, ownProps) => {
  const noteOrder = state.ui.noteOrder;
  const fullEditor = state.ui.fullEditor;
  const noteIndexHeader = "All Notes";
  const notes = sortItems(Object.values(state.entities.notes), noteOrder);
  return {
    noteIndexHeader,
    notes,
    noteOrder,
    fullEditor,
  };
};

export default withRouter(connect(mapStateToProps, null)(NoteIndex));
