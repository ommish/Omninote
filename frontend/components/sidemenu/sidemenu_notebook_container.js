import Sidemenu from './sidemenu';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { toggleSidemenu } from '../../actions/ui_actions';
import { fetchNotebooks, deleteNotebook, createNotebook } from '../../actions/notebook_actions';

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
    fetchAction: () => dispatch(fetchNotebooks()),
    delete: (notebookId) => dispatch(deleteNotebook(notebookId)),
    createAction: (notebook) => dispatch(createNotebook(notebook)),
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Sidemenu));
