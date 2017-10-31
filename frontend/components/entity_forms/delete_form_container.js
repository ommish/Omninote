import DeleteForm from './delete_form';
import { connect } from 'react-redux';
import { deleteNotebook } from '../../actions/notebook_actions';
import { deleteNote } from '../../actions/note_actions';
import { deleteTag } from '../../actions/tag_actions';
import { toggleDeleteForm } from '../../actions/ui_actions';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state, ownProps) => {
  const item = state.entities[`${ownProps.itemType}s`][state.ui.deleteForm.id] || {id: false, title: ""};
  return {
    item,
    formTitle: `DELETE ${ownProps.itemType}`,
    deleteForm: state.ui.deleteForm,
    formMessage: `Are you sure you want to delete ${item.title}?`,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  let action;
  if (ownProps.itemType === "notebook") {
    action = deleteNotebook;
  } else if (ownProps.itemType === "note") {
    action = deleteNote;
  } else if (ownProps.itemType === "tag") {
    action = deleteTag;
  }
  return {
    deleteItem: (id) => dispatch(action(id)),
    toggleDeleteForm: (toDelete) => dispatch(toggleDeleteForm(toDelete)),
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(DeleteForm));
