import DeleteForm from './delete_form';
import { connect } from 'react-redux';
import { deleteNotebook } from '../../actions/notebook_actions';
import { toggleDeleteForm } from '../../actions/ui_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    formTitle: `DELETE ${ownProps.itemType}`,
    deleteFormId: state.ui.deleteForm.id,
    formMessage: `Are you sure you want to delete ${ownProps.item.title}?`,
  };
};


const mapDispatchToProps = (dispatch, ownProps) => {
  const action = ownProps.itemType === "notebook" ? deleteNotebook : null;
  return {
    deleteItem: (id) => dispatch(action(id)),
    toggleDeleteForm: () => dispatch(toggleDeleteForm()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DeleteForm);
