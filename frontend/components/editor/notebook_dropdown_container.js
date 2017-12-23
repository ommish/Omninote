import NotebookDropdown from './notebook_dropdown';
import { connect } from 'react-redux';
import { toggleModal, toggleSelectedNotebook, toggleCreateForm } from '../../actions/ui_actions';
import { sortItems } from '../../util/sorters';

const mapStateToProps = (state, ownProps) => {
  return {
    selectedNotebook: state.ui.selectedNotebook,
    notebookDropdown: state.ui.notebookDropdown,
    allNotebooks: sortItems(Object.values(state.entities.notebooks), 4),
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    toggleNotebookDropdown: () => dispatch(toggleModal("notebookDropdown")),
    toggleSelectedNotebook: (notebookId) => dispatch(toggleSelectedNotebook(notebookId)),
    toggleCreateForm: () => dispatch(toggleCreateForm("notebook")),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NotebookDropdown);
