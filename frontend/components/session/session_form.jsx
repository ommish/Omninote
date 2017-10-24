import React from 'react';
import merge from 'lodash/merge';

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
    return (
      <div>
        <h1>{this.state.formType}</h1>
        <form onSubmit={this.handleSubmit}>
          <p>{this.state.sessionErrors}</p>
          <label> Email
            <input
              type="text"
              value={this.state.user.email}
              onChange={this.handleChange('email')}/>
          </label>
          <label> Password
            <input
              type="password"
              value={this.state.user.password}
              onChange={this.handleChange('password')}/>
          </label>
          <input
            type="submit"
            value={this.state.formType}/>
        </form>
      </div>
    );
  }

}

export default SessionForm;
