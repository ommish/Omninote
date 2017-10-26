import CreateForm from './create_form';
import { connect } from 'react-redux';
import { createNotebook } from '../actions/notebook_actions';
import { toggleCreateForm } from '../actions/ui_actions';

const mapStateToProps = (state, ownProps) => {
  let formMessage;
  let buttonMessage;
  let createFormOpen = state.ui.createForm;
  if (ownProps.itemType === "notebook") {
    formMessage = "Title your notebook";
    buttonMessage = "Create notebook";
  } else {
    formMessage = "Name your tag";
    buttonMessage = "Create tag";
  }

  return {
    formMessage,
    buttonMessage,
    createFormOpen,
  };

};


const mapDispatchToProps = (dispatch, ownProps) => {
  const action = ownProps.itemType === "notebook" ? createNotebook : null;
  return {
    createItem: (item) => dispatch(action(item)),
    toggleCreateForm: () => dispatch(toggleCreateForm()),
  };
};
