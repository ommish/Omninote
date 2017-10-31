import React from 'react';
import SessionForm from './session_form_container';

class AuthPage extends React.Component {

  render() {
    return (
      <div className="auth-page">
        <SessionForm formType={this.props.location.pathname === "/login" ? "Log in" : "Sign up"}/>
      </div>
    );
  }
}

export default AuthPage;
