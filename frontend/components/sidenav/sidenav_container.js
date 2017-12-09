import { connect } from 'react-redux';
import SideNav from './sidenav';
import { logout } from '../../actions/session_actions';
import { withRouter } from 'react-router-dom';
import { toggleSelectedNote, toggleModal, toggleSidemenu, toggleSidemenuItemType } from '../../actions/ui_actions';

const mapStateToProps = (state) => {
  return {
    sidemenuItemType: state.ui.sidemenuItemType,
    sidemenuOpen: state.ui.sidemenu === "sidemenu-open",
    currentUser: state.session.currentUser.email,
    fullEditor: state.ui.fullEditor,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    // dispatch actions to toggle UI slices of state
    logout: () => dispatch(logout()),
    toggleSelectedNote: () => dispatch(toggleSelectedNote({id: false})),
    toggleFullEditor: () => dispatch(toggleModal("fullEditor")),
    toggleSidemenuItemType: (itemType) => dispatch(toggleSidemenuItemType(itemType)),
    toggleSidemenu: () => dispatch(toggleSidemenu()),
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SideNav));
