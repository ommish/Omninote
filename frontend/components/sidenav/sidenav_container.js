import { connect } from 'react-redux';
import SideNav from './sidenav';
import { logout } from '../../actions/session_actions';
import { withRouter } from 'react-router-dom';

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
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SideNav));
