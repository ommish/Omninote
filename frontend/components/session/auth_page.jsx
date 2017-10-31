import React from 'react';
import SessionForm from './session_form_container';
import { Route } from 'react-router-dom';

class AuthPage extends React.Component {

  render() {
    return (
      <div className="auth-page">
        <Route path="/login" component={SessionForm} />
        <Route path="/signup" component={SessionForm} />
      </div>
    );
  }
}

export default AuthPage;
