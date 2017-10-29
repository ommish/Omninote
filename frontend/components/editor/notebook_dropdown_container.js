import NotebookDropdown from './notebook_dropdown';
import { connect } from 'react-redux';
import { toggleModal, toggleSelectedNotebook, toggleCreateForm } from '../../actions/ui_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    selectedNotebook: state.ui.selectedNotebook,
    notebookDropdown: state.ui.notebookDropdown,
    allNotebooks: Object.values(state.entities.notebooks),
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    toggleNotebookDropdown: () => dispatch(toggleModal("notebookDropdown")),
    toggleSelectedNotebook: (notebook) => dispatch(toggleSelectedNotebook(notebook)),
    toggleCreateForm: () => dispatch(toggleModal("createForm")),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NotebookDropdown);
