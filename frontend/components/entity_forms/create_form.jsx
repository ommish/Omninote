import React from 'react';
import Modal from 'react-modal';
import { merge } from 'lodash';

class CreateForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {title: ""};
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.redirect = this.redirect.bind(this);
    this.handleEnter = this.handleEnter.bind(this);
  }

  redirect (id) {
    this.props.history.push(`/${this.props.itemType}s/${id}`);
  }

  handleSubmit(e) {
    e.preventDefault();
    const newItem = merge({}, this.state);
    this.props.createItem(newItem).then((res) => {
      this.redirect(
        res[this.props.itemType].id
      );
      this.closeModal();
    });
  }

  handleCancel(e) {
    e.preventDefault();
    this.closeModal();
  }

  handleEnter(e) {
    if (e.key === 'Enter') {
      e.preventDefault();
      this.handleSubmit(e);
    }
  }

  handleChange (e) {
    this.setState({ title: e.target.value });
  }

  closeModal () {
    this.setState({ title: "" });
    this.props.clearItemErrors();
    if (this.props.notebookDropdownOpen) {
      this.props.toggleNotebookDropdown();
    }
    this.props.toggleCreateForm("");
  }

  render() {
    let errors = this.props.errors || [];
    errors = errors.map((error) => <li className="create-errors" key={error}>{error}</li>);
    return (
      <Modal
        ariaHideApp={false}
        isOpen={this.props.createFormType !== "" }
        onRequestClose={this.closeModal}
        className="full-form-open"
        overlayClassName='full-form-overlay'>
        <form className="full-form"
        onSubmit={this.handleSubmit}
        onKeyPress={this.handleEnter}>
          <div className="full-form-icon"><img src={window.staticAssets[this.props.itemType]}/></div>
          <div className="full-form-header">Create {this.props.itemType}</div>
          <input
            type="text"
            placeholder={this.props.formMessage}
            value={this.state.title}
            onChange={this.handleChange}/>
          <div className="full-form-button-container">
            <button onClick={this.handleCancel}
              className="button grey small">
              Cancel</button>
            <button type="submit"
              className={
                this.state.title === "" ? "button green small disabled": "button green small"}
              disabled={this.state.title === "" ? true : false }>
              {this.props.buttonMessage}</button>
          </div>
          <ul>
            {errors}
          </ul>
        </form>
      </Modal>
    );
  }
}

export default CreateForm;
