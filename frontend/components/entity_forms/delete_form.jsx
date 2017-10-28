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
    this.toggleSelectedNotebook = this.props.toggleSelectedNotebook.bind(this);
    this.toggleSelectedNote = this.props.toggleSelectedNote.bind(this);
  }

  redirect () {
    if (this.props.selectedNotebook.id) {
      this.props.history.replace(`/notebooks/${this.props.selectedNotebook.id}`);
    } else {
      this.props.history.replace('/notes');
    }
  }

  handleSubmit(e) {
    this.redirect();
    if (this.props.item.notebookId === this.props.selectedNotebook.id) {
      this.toggleSelectedNotebook({id: null});
    }
    this.toggleSelectedNote({id: null});
    this.props.deleteItem(this.props.item.id).then(() => {
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
