import { login, signup } from '../../actions/session_actions';
import SessionForm from './session_form';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state, ownProps) => {
  const user = { email: "", password: "" };
  const formType = ownProps.location.pathname === '/login' ? 'Log In' : 'Sign Up';
  const sessionErrors = state.errors.sessionErrors;
  return {
    user,
    formType,
    sessionErrors,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const submitForm = ownProps.location.pathname === '/login' ? login : signup;
  return {
    submitForm: (user) => dispatch(submitForm(user)),
    demoLogin: (user) => dispatch(login(user)),
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SessionForm));
