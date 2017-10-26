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
  }

  handleSubmit(e) {
    this.props.createItem(this.state.item);
    const blankItem = {item: { title: "" }};
    const newState = merge(this.state, blankItem);
    // Form submission canceled because the form is not connected
    // error in Chrome, any significance?
  }

  handleCancel(e) {
    e.preventDefault();
    const blankItem = {item: { title: "" }};
    const newState = merge(this.state, blankItem);
    this.setState(newState);
    this.props.toggleCreateForm();
  }

  handleChange (e) {
    const newItem = {item: { title: e.target.value } };
    let newState = merge(this.state, newItem);
    this.setState(newState);
  }

  componentWillReceiveProps (newProps) {
    if (newProps.createFormOpen && newProps.errors.length > 0) {
      this.setState(newProps);
    }
    else if (!newProps.createFormOpen && newProps.errors.length > 0) {
      const blankItem = {item: { title: "" }, errors: []};
      const newState = merge(this.state, blankItem);
      this.setState(newState);
    }
    // TODO figure out how to clear errors!
  }

  render() {
    let errors = this.state.errors || [];
    errors = errors.map((error, i) => <li key={i}>{error}</li>);
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
            value={this.state.title}
            onChange={this.handleChange}/>
          <button onClick={this.handleCancel}
            className="square-button grey-button" >Cancel</button>
          <input type="submit" value={this.props.buttonMessage}
            className="square-button" />
        </form>
        <ul>
          {errors}
        </ul>
      </Modal>
    );
  }




}


export default CreateForm;
