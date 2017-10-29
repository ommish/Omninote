import { connect } from 'react-redux';
import SidemenuIndexItem from './sidemenu_index_item';
import { fetchNotebook, deleteNotebook } from '../../actions/notebook_actions';
import { toggleModal, toggleDeleteForm, toggleSidemenu } from '../../actions/ui_actions';
import { withRouter } from 'react-router-dom';

// const mapStateToProps = (state, ownProps) => {
//
// };

const mapDispatchToProps = (dispatch, ownProps) => {
  let getAction;
  let deleteAction;
  if (ownProps.itemType === "notebook") {
    getAction = fetchNotebook;
    deleteAction = deleteNotebook;
  }
  return {
    fetchItem: (id) => dispatch(getAction(id)),
    deleteItem: (id) => dispatch(deleteAction(id)),
    toggleSidemenu: () => dispatch(toggleSidemenu()),
    toggleDeleteForm: (id) => dispatch(toggleDeleteForm(id)),
  };
};

export default withRouter(connect(null, mapDispatchToProps)(SidemenuIndexItem));
