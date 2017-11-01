import NotebookDropdown from './notebook_dropdown';
import { connect } from 'react-redux';
import { toggleModal, toggleSelectedNotebook, toggleCreateForm } from '../../actions/ui_actions';

const mapStateToProps = (state, ownProps) => {
  const openDropdownClass = state.ui.fullEditor ? "notebook-dropdown-open left" : "notebook-dropdown-open";
  return {
    selectedNotebook: state.ui.selectedNotebook,
    notebookDropdown: state.ui.notebookDropdown,
    allNotebooks: Object.values(state.entities.notebooks),
    openDropdownClass,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    toggleNotebookDropdown: () => dispatch(toggleModal("notebookDropdown")),
    toggleSelectedNotebook: (notebook) => dispatch(toggleSelectedNotebook(notebook)),
    toggleCreateForm: () => dispatch(toggleCreateForm("notebook")),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NotebookDropdown);
