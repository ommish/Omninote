import { login, signup, receiveUserErrors } from '../../actions/session_actions';
import SessionForm from './session_form';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state, ownProps) => {
  return {
    user: { email: "", password: "" },
    sessionErrors: state.errors.sessionErrors,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const submitForm = ownProps.formType === "Log In" ? login : signup;
  return {
    submitForm: (user) => dispatch(submitForm(user)),
    demoLogin: (user) => dispatch(login(user)),
    clearUserErrors: () => dispatch(receiveUserErrors([])),
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SessionForm));
