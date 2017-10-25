import { connect } from 'react-redux';
import SideNav from './sidenav';

const mapStateToProps = (state) => {
  return {
    // UI slices of state to render changes in sidemenu
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    // dispatch actions to toggle UI slices of state
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SideNav);
