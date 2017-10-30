import React from 'react';
import Modal from 'react-modal';
import { merge } from 'lodash';

class CreateForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = this.props;
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.redirect = this.redirect.bind(this);
  }

  redirect (id) {
    this.props.history.push(`/notebooks/${id}`);
  }

  handleSubmit(e) {
    this.props.createItem(this.state.item).then((res) => {
      this.redirect(
        res.notebook.id
      );
      this.closeModal();
    });
  }

  handleCancel(e) {
    e.preventDefault();
    this.closeModal();
  }

  handleChange (e) {
    const newItem = {item: { title: e.target.value } };
    let newState = merge(this.state, newItem);
    this.setState(newState);
  }

  componentWillReceiveProps (newProps) {
    if (newProps.createFormOpen && newProps.errors.length > 0) {
      this.setState(newProps);
    } else if (!this.props.createFormOpen && newProps.createFormOpen) {
        this.setState(newProps);
    }
  }

  closeModal () {
    const blankItem = {item: { title: "" }, errors: []};
    const newState = merge(this.state, blankItem);
    this.setState(newState);
    this.props.clearItemErrors();
    if (this.props.notebookDropdownOpen) {
      this.props.toggleNotebookDropdown();
    }
    this.props.toggleCreateForm();
  }

  render() {
    let errors = this.state.errors || [];
    errors = errors.map((error, i) => <li className="create-errors" key={i}>{error}</li>);
    return (
      <Modal
        isOpen={this.props.createFormOpen}
        onRequestClose={this.closeModal}
        className="full-form-open"
        overlayClassName='full-form-overlay'>
        <form className="full-form" onSubmit={this.handleSubmit}>
          <div className="full-form-header">Create {this.props.itemType}</div>
          <input
            type="text"
            placeholder={this.props.formMessage}
            value={this.state.title}
            onChange={this.handleChange}/>
          <div className="full-form-button-container">
            <button onClick={this.handleCancel}
              className="square-button grey-button small">
              Cancel</button>
            <button type="submit"
              className={
                this.state.item.title === "" ? "square-button small disabled": "square-button small"}
              disabled={this.state.item.title === "" ? true : false }>
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
