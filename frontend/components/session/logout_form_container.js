import LogoutForm from './logout_form';
import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import { toggleModal } from '../../actions/ui_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    logoutForm: state.ui.logoutForm,
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    logout: () => dispatch(logout()),
    toggleLogoutForm: () => dispatch(toggleModal("logoutForm")),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LogoutForm);
