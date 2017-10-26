import { connect } from 'react-redux';
import SidemenuIndexItem from './sidemenu_index_item';
import { fetchNotebook, deleteNotebook } from '../../actions/notebook_actions';
import { toggleSidemenu } from '../../actions/ui_actions';

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
  };
};

export default connect(null, mapDispatchToProps)(SidemenuIndexItem);
