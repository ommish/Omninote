import CreateForm from './create_form';
import { connect } from 'react-redux';
import { createNotebook, receiveNotebookErrors } from '../../actions/notebook_actions';
import { createTag, receiveTagErrors } from '../../actions/tag_actions';
import { withRouter } from 'react-router-dom';
import { toggleModal, toggleCreateForm } from '../../actions/ui_actions';

const mapStateToProps = (state, ownProps) => {
  let formMessage;
  let buttonMessage;
  let errors;
  let item = { title: "" };

  if (ownProps.itemType === "notebook") {
    formMessage = "Title your notebook";
    buttonMessage = "Create notebook";
    errors = state.errors.notebookErrors;
  } else {
    formMessage = "Name your tag";
    buttonMessage = "Create tag";
    errors = state.errors.tagErrors;
  }
  return {
    notebookDropdownOpen: state.ui.notebookDropdown,
    createFormType: state.ui.createForm.itemType,
    formMessage,
    buttonMessage,
    item,
    errors,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const action = ownProps.itemType === "notebook" ? createNotebook : createTag;
  const clearItemErrors = ownProps.itemType === "notebook" ? receiveNotebookErrors : receiveTagErrors;
  return {
    createItem: (item) => dispatch(action(item)),
    toggleCreateForm: (itemType) => dispatch(toggleCreateForm(itemType)),
    clearItemErrors: () => dispatch(clearItemErrors([])),
    toggleNotebookDropdown: () => dispatch(toggleModal("notebookDropdown")),
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CreateForm));
