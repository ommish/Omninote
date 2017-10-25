import { connect } from 'react-redux';
import { toggleSidemenu } from './actions/ui_actions';

const mapStateToProps = (state) => {
  return {
    sidemenuOpen: state.ui.sidemenu,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    toggleSidemenu: () => dispatch(toggleSidemenu()),
  };
};
