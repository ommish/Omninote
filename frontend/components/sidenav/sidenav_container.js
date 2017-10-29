import { connect } from 'react-redux';
import SideNav from './sidenav';
import { logout } from '../../actions/session_actions';
import { withRouter } from 'react-router-dom';
import { toggleSelectedNote, toggleModal, toggleSidemenu } from '../../actions/ui_actions';

const mapStateToProps = (state) => {
  return {
    // UI slices of state to render changes in sidemenu
        // notebookmenu
        // tagmenu
        // fullscreen editor
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    // dispatch actions to toggle UI slices of state
    logout: () => dispatch(logout()),
    toggleSelectedNote: () => dispatch(toggleSelectedNote({id: null})),
    toggleFullEditor: () => dispatch(toggleModal("fullEditor")),
    toggleSidemenu: () => dispatch(toggleSidemenu()),
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SideNav));
