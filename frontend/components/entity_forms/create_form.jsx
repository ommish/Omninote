import React from 'react';
import Modal from 'react-modal';

class CreateForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {title: ""};
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    this.props.action(this.state);
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
            value={this.state.title} />
          <button onClick={this.props.toggleSidemenu}>Cancel</button>
          <input type="submit">{this.props.buttonMessage}</input>
        </form>
      </Modal>
    );
  }




}


export default CreateForm;
