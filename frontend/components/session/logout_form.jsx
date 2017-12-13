import React from 'react';
import Modal from 'react-modal';
import { merge } from 'lodash';

class LogoutForm extends React.Component {

  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
    this.toggleLogoutForm = this.props.toggleLogoutForm.bind(this);
  }

  handleSubmit(e) {
    e.stopPropagation();
    this.toggleLogoutForm();
    this.props.logout()
  }

  handleCancel(e) {
    e.stopPropagation();
    this.toggleLogoutForm();
  }

  render() {
    return (
      <Modal
      ariaHideApp={false}
      isOpen={this.props.logoutForm}
      onRequestClose={this.toggleLogoutForm}
      className="full-form-open"
      overlayClassName='full-form-overlay'>
      <div className="full-form" >
      <div className="full-form-header">Log Out</div>
      <div className="full-form-icon"><img src={window.staticAssets.account}/></div>
      <div className="full-form-message">Are you sure you want to leave?</div>
      <div className="full-form-button-container">
      <button onClick={this.handleCancel}
      className="button grey small">
      Cancel</button>
      <button
      onClick={this.handleSubmit}
      className="button green small">
      Log Out</button>
      </div>
      </div>
      </Modal>
    );
  }
}

export default LogoutForm;
