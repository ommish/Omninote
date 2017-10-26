import Sidemenu from './sidemenu';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { toggleSidemenu, toggleCreateForm } from '../../actions/ui_actions';
import { fetchNotebooks, deleteNotebook, createNotebook, fetchNotebook } from '../../actions/notebook_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    notebooks: Object.values(state.entities.notebooks),
    sidemenuOpen: state.ui.sidemenu,
    itemType: "notebook",

  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    toggleSidemenu: () => dispatch(toggleSidemenu()),
    toggleCreateForm: () => dispatch(toggleCreateForm()),
    fetchItems: () => dispatch(fetchNotebooks()),
    delete: (notebookId) => dispatch(deleteNotebook(notebookId)),
    createAction: (notebook) => dispatch(createNotebook(notebook)),
    fetchItem: (notebookId) => dispatch(fetchNotebook(notebookId)),
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Sidemenu));
