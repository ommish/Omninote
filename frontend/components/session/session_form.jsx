import React from 'react';
import { merge } from 'lodash';
import { Link } from 'react-router-dom';

class SessionForm extends React.Component {

  constructor(props) {
    // TODO: how to deconstruct props properly, and not get error from super(props)
    // and set this.attr = the attr passed in
    super(props);
    this.state = this.props;
    this.handleSubmit = this.handleSubmit.bind(this);
    this.demoLogin = this.demoLogin.bind(this);
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

  handleChange(field) {
    return (e) => {
      const newUser = merge({}, this.state);
      newUser.user[field] = e.target.value;
      this.setState(newUser);
    };
  }

  componentWillReceiveProps(newProps) {
    if (this.state !== newProps) {
      this.setState(newProps);
    }
  }

  render () {
    let errors = this.state.sessionErrors.map((error, i) => <li key={i}>{error}</li>);
    let errorPresent = errors.length > 0 ? "error-present" : "";
    let formPage = "";
    if ((this.props.location.pathname === '/login') ||
      (this.props.location.pathname === '/signup')) {
        formPage = "form-page";
        $("html").addClass("grey-bg");
    }
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
      <div
        id={formPage}
        className="session-form">
        <form
          onSubmit={this.handleSubmit}>
          <h3>{this.state.formType}</h3>
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
          <input
            type="submit"
            value={this.state.formType}
            className="square-button"/>
          <br></br>
          <ul>{errors}{authMessage}{authLink}</ul>
        </form>
        <form onSubmit={this.demoLogin}>
          <input
            type="submit"
            value="Demo Log In"
            className="square-button"/>
        </form>
      </div>
    );
  }

}

export default SessionForm;
