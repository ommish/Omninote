import CreateForm from './create_form';
import { connect } from 'react-redux';
import { createNotebook, receiveNotebookErrors } from '../../actions/notebook_actions';
import { withRouter } from 'react-router-dom';
import { toggleModal } from '../../actions/ui_actions';

const mapStateToProps = (state, ownProps) => {
  let formMessage;
  let buttonMessage;
  let createFormOpen = state.ui.createForm;
  let notebookDropdownOpen = state.ui.notebookDropdown;
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
    notebookDropdownOpen,
    formMessage,
    buttonMessage,
    createFormOpen,
    item,
    errors,
  };
};


const mapDispatchToProps = (dispatch, ownProps) => {
  const action = ownProps.itemType === "notebook" ? createNotebook : null;
  return {
    createItem: (item) => dispatch(action(item)),
    toggleCreateForm: () => dispatch(toggleModal("createForm")),
    clearItemErrors: () => dispatch(receiveNotebookErrors([])),
    toggleNotebookDropdown: () => dispatch(toggleModal("notebookDropdown")),
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CreateForm));
