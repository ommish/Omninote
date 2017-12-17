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

  redirect(path) {
    this.props.history.push(path);
  }

  handleSubmit(e) {

        if (this.props.itemType === "notebook") {
          if (parseInt(this.props.match.params.notebookId) === this.props.item.id) {
            this.redirect('/notes');
          }
        } else if (this.props.itemType === "tag") {
          if (parseInt(this.props.match.params.tagId) === this.props.item.id) {
            this.redirect('/notes');
          }
        } else if (this.props.itemType === "note") {
          if (parseInt(this.props.match.params.noteId) === this.props.item.id) {
            if (this.props.match.params.notebookId) {
              this.redirect(`/notebooks/${this.props.match.params.notebookId}`);
            } else {
              this.redirect('/notes');
            }
          }
        } else {
          this.redirect('/notes');
        }

        this.props.deleteItem(this.props.item.id).then(() => {
        this.closeModal();
      });
    }

    handleCancel(e) {
      this.closeModal();
    }

    closeModal () {
      this.props.toggleDeleteForm({id: false, type: ""});
    }

    componentWillReceiveProps (newProps) {
      if (!this.props.deleteFormId && newProps.deleteFormId) {
        this.setState(newProps);
      }
    }

    render() {
      return (
        <Modal
          ariaHideApp={false}
          isOpen={(this.props.deleteForm.id) && (this.props.deleteForm.type === this.props.itemType)}
          onRequestClose={this.closeModal}
          className="full-form-open"
          overlayClassName='full-form-overlay'>
          <div className="full-form" >
            <div className="full-form-icon"><img src={window.staticAssets[this.props.itemType]}/></div>
            <div className="full-form-header">{this.props.formTitle}</div>
            <div className="full-form-message">{this.props.formMessage}</div>
            <div className="full-form-message-title">{this.props.formMessageTitle}</div>
            <div className="full-form-button-container">
              <button onClick={this.handleCancel}
                className="button grey small">
                Cancel</button>
              <button
                onClick={this.handleSubmit}
                className="button green small">
                Delete</button>
            </div>
          </div>
        </Modal>
      );
    }
  }

  export default DeleteForm;
