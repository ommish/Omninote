import { connect } from 'react-redux';
import NoteIndexItem from './note_index_item';
import { deleteNote } from '../../actions/note_actions';

const mapStateToProps = (state, ownProps) => {
  return {

  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    deleteNote: (id) => dispatch(deleteNote(id)),
  };
};
