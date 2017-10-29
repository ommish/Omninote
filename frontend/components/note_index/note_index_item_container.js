import { connect } from 'react-redux';
import NoteIndexItem from './note_index_item';
import { withRouter } from 'react-router-dom';
import { toggleDeleteForm } from '../../actions/ui_actions';

const mapStateToProps = (state, ownProps) => {
  let bodySnippet = ownProps.note.bodyPlain || "";
  if (bodySnippet.length > 40) {
    bodySnippet = bodySnippet.slice(0, 40).concat("...");
  }

  return {
    bodySnippet,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    toggleDeleteForm: (id) => dispatch(toggleDeleteForm(id)),
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NoteIndexItem));
