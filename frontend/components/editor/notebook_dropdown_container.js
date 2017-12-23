import NotebookDropdown from './notebook_dropdown';
import { connect } from 'react-redux';
import { toggleModal, toggleSelectedNotebook, toggleCreateForm } from '../../actions/ui_actions';
import { sortItems } from '../../util/sorters';
import { withRouter } from 'react-router-dom';


const mapStateToProps = (state, ownProps) => {
  return {
    notes: state.entities.notes,
    selectedNotebook: state.ui.selectedNotebook,
    notebookDropdown: state.ui.notebookDropdown,
    allNotebooks: sortItems(Object.values(state.entities.notebooks), 4),
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    toggleNotebookDropdown: () => dispatch(toggleModal("notebookDropdown")),
    toggleSelectedNotebook: (notebookId, clicked) => dispatch(toggleSelectedNotebook(notebookId, clicked)),
    toggleCreateForm: () => dispatch(toggleCreateForm("notebook")),
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NotebookDropdown));
