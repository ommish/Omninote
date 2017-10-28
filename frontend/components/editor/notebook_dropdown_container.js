import NotebookDropdown from './notebook_dropdown';
import { connect } from 'react-redux';
import { toggleNotebookDropdown, toggleSelectedNotebook } from '../../actions/ui_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    selectedNotebook: state.ui.selectedNotebook || {id: null, title: "Select Notebook"},
    notebookDropdown: state.ui.notebookDropdown,
    notebookTitles: state.ui.notebookTitles,
    notebooks: state.entities.notebooks,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    toggleNotebookDropdown: () => dispatch(toggleNotebookDropdown()),
    toggleSelectedNotebook: (notebook) => dispatch(toggleSelectedNotebook(notebook)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NotebookDropdown);
