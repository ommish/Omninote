import Sidemenu from './sidemenu';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { toggleModal, toggleSidemenu } from '../../actions/ui_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    items: Object.values(state.entities.notebooks),
    sidemenu: state.ui.sidemenu,
    itemType: "notebook",
    sidemenuOpen: ((state.ui.sidemenu !== "hidden") && (state.ui.sidemenu !== "closed-sidemenu"))
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    toggleSidemenu: () => dispatch(toggleSidemenu()),
    toggleCreateForm: () => dispatch(toggleModal("createForm")),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Sidemenu);
