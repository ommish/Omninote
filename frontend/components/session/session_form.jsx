import React from 'react';
import { merge } from 'lodash';
import { Link } from 'react-router-dom';

class SessionForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = this.props;
    this.handleSubmit = this.handleSubmit.bind(this);
    this.demoLogin = this.demoLogin.bind(this);
  }

  componentWillUnmount() {
    this.props.clearUserErrors();
  }

  componentWillReceiveProps(newProps) {
    this.setState(newProps);
  }

  handleChange(field) {
    return (e) => {
      const newUser = merge({}, this.state);
      newUser.user[field] = e.target.value;
      this.setState(newUser);
    };
  }

  handleSubmit (e) {
    e.preventDefault();
    const newUser = merge({}, this.state.user);
    this.props.submitForm(newUser);
  }

  demoLogin (e) {
    e.preventDefault();
    const demoUser = {email: "demo@gmail.com", password: "demoaccount"};
    this.props.demoLogin(demoUser);
  }

  render () {
    const formType = this.props.location.pathname === "/login" ? "Log In" : "Sign Up";
    let errors = this.state.sessionErrors.map((error, i) => <li key={i}>{error}</li>);
    let errorPresent = errors.length > 0 ? "error-present" : "";

    let authLink;
    let authMessage;
    if (this.props.location.pathname === '/login') {
      authMessage = <p>Don't have an account?</p>;
      authLink = <Link to="/signup">Sign Up Here</Link>;
    } else if (this.props.location.pathname === '/signup'){
      authMessage = <p>Already signed up?</p>;
      authLink = <Link to="/login">Log In Here</Link>;
    }

    return (
      <div className={this.props.location.pathname === "/" ? "default-form" : "full-page-form"}>
        <div className="session-form">
          <h2>{formType}</h2>
          <br></br>
            <input
              placeholder="Email"
              type="text"
              value={this.state.user.email}
              onChange={this.handleChange('email')}
              className={errorPresent}/>
            <input
              placeholder="Password"
              type="password"
              value={this.state.user.password}
              onChange={this.handleChange('password')}
              className={errorPresent}/>
            <button
              onClick={this.handleSubmit}
            className="square-button">{formType}</button>
          <br></br>
          <ul className="auth-errors">{errors}{authMessage}{authLink}</ul>
          <button
            onClick={this.demoLogin}
            className="square-button">Demo Log In
          </button>
        </div>
      </div>
    );
  }

}

export default SessionForm;
