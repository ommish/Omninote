import React from 'react';
import SessionForm from './session_form_container';
import { Route } from 'react-router-dom';

class AuthPage extends React.Component {

  render() {
    return (
      <div className="auth-page">
        <div className="auth-logo" >
          <img src="https://png.icons8.com/elephant/ios7/100/666666"/>
        </div>
        <Route path="/login" component={SessionForm} />
        <Route path="/signup" component={SessionForm} />
      </div>
    );
  }
}

export default AuthPage;
