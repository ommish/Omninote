import NotebookDropdown from './notebook_dropdown';
import { connect } from 'react-redux';
import { toggleNotebookDropdown, toggleSelectedNotebook } from '../../actions/ui_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    selectedNotebook: state.ui.selectedNotebook,
    notebookDropdown: state.ui.notebookDropdown,
    allNotebooks: Object.values(state.entities.notebooks),
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    toggleNotebookDropdown: () => dispatch(toggleNotebookDropdown()),
    toggleSelectedNotebook: (notebookId) => dispatch(toggleSelectedNotebook(notebookId)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NotebookDropdown);
