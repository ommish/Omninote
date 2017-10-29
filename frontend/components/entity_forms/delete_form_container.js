import DeleteForm from './delete_form';
import { connect } from 'react-redux';
import { deleteNotebook } from '../../actions/notebook_actions';
import { deleteNote } from '../../actions/note_actions';
import { toggleDeleteForm } from '../../actions/ui_actions';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state, ownProps) => {
  return {
    formTitle: `DELETE ${ownProps.itemType}`,
    deleteFormId: state.ui.deleteForm.id,
    formMessage: `Are you sure you want to delete ${ownProps.item.title}?`,
    selectedNotebook: state.ui.selectedNotebook,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  let action;
  if (ownProps.itemType === "notebook") {
    action = deleteNotebook;
  } else if (ownProps.itemType === "note") {
    action = deleteNote;
  }
  return {
    deleteItem: (id) => dispatch(action(id)),
    toggleDeleteForm: (id) => dispatch(toggleDeleteForm(id)),
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(DeleteForm));
