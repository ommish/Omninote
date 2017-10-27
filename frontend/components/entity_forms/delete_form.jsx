import React from 'react';
import Modal from 'react-modal';
import { merge } from 'lodash';

class DeleteForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = this.props;
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.redirect = this.redirect.bind(this);
  }

  redirect () {
    this.props.history.push('/notes');
  }

  handleSubmit(e) {
    this.props.deleteItem(this.props.item.id).then(() => {
      this.redirect();
      this.closeModal();
    });
  }

  handleCancel(e) {
    this.closeModal();
  }

  closeModal () {
    this.props.toggleDeleteForm(null);
  }

  componentWillReceiveProps (newProps) {
    if (!this.props.deleteFormId && newProps.deleteFormId) {
      this.setState(newProps);
    }
  }

  render() {
    return (
      <Modal
        isOpen={this.props.deleteFormId === this.props.item.id}
        onRequestClose={this.closeModal}
        className="full-form-open"
        overlayClassName='full-form-overlay'>
        <div className="full-form" >
          <div className="full-form-header">{this.props.formTitle}</div>
          <div className="full-form-message">{this.props.formMessage}</div>
          <div className="full-form-button-container">
            <button onClick={this.handleCancel}
              className="square-button grey-button small">
              Cancel</button>
            <button
              onClick={this.handleSubmit}
              className={"square-button small"}>
              Delete</button>
          </div>
        </div>
      </Modal>
    );
  }
}

export default DeleteForm;
