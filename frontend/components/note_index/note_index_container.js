import { connect } from 'react-redux';
import NoteIndex from './note_index';
import { fetchNotes } from '../../actions/note_actions';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state, ownProps) => {
  let notes;
  const notebookId = ownProps.match.params.notebookId;
  const tagId = ownProps.match.params.tagId;
  const noteOrder = state.ui.noteOrder;

  if (!notebookId && !tagId) {
    return {
      notes: Object.values(state.notes),
      noteOrder,
    };
  } else if (notebookId) {
    return {
      notes: Object.values(state.notes).filter((note) => note.notebookId === notebookId),
      noteOrder,
    };
  } else {
    return {
      notes: Object.values(state.notes).filter((note) => note.tagId === tagId),
      noteOrder,
    };
  }
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchNotes: () => dispatch(fetchNotes()),
  };
};

export default withRouter(connect(mapStateToProps, null)(NoteIndex));
