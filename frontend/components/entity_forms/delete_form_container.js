import DeleteForm from './delete_form';
import { connect } from 'react-redux';
import { deleteNotebook } from '../../actions/notebook_actions';
import { deleteNote } from '../../actions/note_actions';
import { deleteTag } from '../../actions/tag_actions';
import { deleteFlag } from '../../actions/flag_actions';
import { toggleDeleteForm, toggleSelectedNotebook } from '../../actions/ui_actions';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state, ownProps) => {
  const item = state.entities[`${ownProps.itemType}s`][state.ui.deleteForm.id];
  return {
    item,
    formTitle: `DELETE ${ownProps.itemType}`,
    deleteForm: state.ui.deleteForm,
    formMessage: "Are you sure you want to delete",
    formMessageTitle: `${item ? item.title.concat("?") : ""}`,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  let action;
  switch(ownProps.itemType) {
    case "notebook":
    action = deleteNotebook;
    break;
    case "note":
    action = deleteNote;
    break;
    case "tag":
    action = deleteTag;
    break;
    case "flag":
    action = deleteFlag;
    break;
    default:
    break;
  }
  return {
    deleteItem: (id) => dispatch(action(id)),
    toggleDeleteForm: (toDelete) => dispatch(toggleDeleteForm(toDelete)),
    toggleSelectedNotebook: () => dispatch(toggleSelectedNotebook(null, false)),
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(DeleteForm));
