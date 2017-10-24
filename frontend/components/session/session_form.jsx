import React from 'react';
import { merge } from 'lodash';

class SessionForm extends React.Component {

  constructor(props) {
    // TODO: how to deconstruct props properly, and not get error from super(props)
    // and set this.attr = the attr passed in
    super(props);
    this.state = this.props;
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit (e) {
    e.preventDefault();
    const newUser = merge({}, this.state.user);
    this.props.submitForm(newUser);
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
    const errors = this.state.sessionErrors.map((error, i) => <p key={i}>{error}</p>);
    return (
        <form
          onSubmit={this.handleSubmit}
          className="session-form">
          <h3>{this.state.formType}</h3>
          <br></br>
          {errors}
          <br></br>
            <input
              placeholder="Email"
              type="text"
              value={this.state.user.email}
              onChange={this.handleChange('email')}/>
            <input
              placeholder="Password"
              type="password"
              value={this.state.user.password}
              onChange={this.handleChange('password')}/>
          <input
            type="submit"
            value={this.state.formType}
            className="square-button"/>
        </form>
    );
  }

}

export default SessionForm;
