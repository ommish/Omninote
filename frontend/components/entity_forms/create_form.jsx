import React from 'react';
import Modal from 'react-modal';

class CreateForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {title: ""};
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
  }

  handleSubmit(e) {
    this.props.createItem(this.state);
    this.props.toggleCreateForm();
  }

  handleCancel(e) {
    e.preventDefault();
    this.props.toggleCreateForm();
  }

  render() {
    return (
      <Modal
        isOpen={this.props.createFormOpen}
        onRequestClose={this.props.toggleCreateForm}
        className="create-form-open"
        overlayClassName='create-form-overlay'>
        <form onSubmit={this.handleSubmit}>
          <div className="new-form-header">Create {this.props.itemType}</div>
          <input
            type="text"
            placeholder={this.props.formMessage}
            value={this.state.title}/>
          <button onClick={this.handleCancel}
            className="square-button" >Cancel</button>
          <input type="submit" value={this.props.buttonMessage}
            className="square-button" />
        </form>
      </Modal>
    );
  }




}


export default CreateForm;
