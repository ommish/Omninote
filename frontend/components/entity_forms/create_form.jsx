import React from 'react';
import Modal from 'react-modal';

class CreateForm extends React.Component {

  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  render() {
    return (
      <Modal>
        <form onSubmit={this.handleSubmit}>
          <div className="new-del-form-header">{this.props.formType}</div>
          <input
            type="text"
            placeholder={this.props.formMessage}
            value={this.state.title}></input>
          <button onClick={this.props.toggleSidemenu}></button>
        </form>
      </Modal>
    );
  }




}


export default NewDeleteForm;
