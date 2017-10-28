import { connect } from 'react-redux';
import SidemenuIndexItem from './sidemenu_index_item';
import { fetchNotebook, deleteNotebook } from '../../actions/notebook_actions';
import { toggleModal, toggleDeleteForm } from '../../actions/ui_actions';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state, ownProps) => {
  let titleSnippet = ownProps.item.title;
  if (titleSnippet.length > 30) {
    titleSnippet = titleSnippet.slice(0, 30).concat("...");
  }
  return {
    titleSnippet,
  };

};

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
    toggleSidemenu: () => dispatch(toggleModal("sidemenu")),
    toggleDeleteForm: (id) => dispatch(toggleDeleteForm(id)),
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SidemenuIndexItem));
