import React from 'react';
import Modal from 'react-modal';
import CreateForm from '../entity_forms/create_form_container';

class NotebookDropdown extends React.Component {

  toggleNotebook (notebook) {
    return (e) => {
      this.props.toggleNotebookDropdown();
      this.props.toggleSelectedNotebook(notebook);
    };
  }

  render () {
    const notebooks = this.props.allNotebooks.map((notebook, i) => (
        <button
          onClick={this.toggleNotebook(notebook)}
          className={notebook.id === this.props.selectedNotebook.id ? "notebook-dropdown-item selected" : "notebook-dropdown-item"}
          key={i}>
          {notebook.title}
        </button>
      ));
    notebooks.push([
      <button
      onClick={this.props.toggleCreateForm}
      className="notebook-dropdown-item"
      key="a">
      Add New Notebook
    </button>,
    <CreateForm
      itemType="notebook"
      key="b"
    /> ]);

    return (
    [
      <div className="notebook-button-div"
        key={1}>
        <button
          className="notebook-button"
          onClick={this.props.toggleNotebookDropdown}>
          {this.props.selectedNotebook.id ?
            this.props.allNotebooks.filter((notebook) => (
            notebook.id === this.props.selectedNotebook.id
          ))[0].title : "Select Notebook"}▾
        </button>
      </div>,
      <Modal
        key={2}
        isOpen={this.props.notebookDropdown}
        onRequestClose={this.props.toggleNotebookDropdown}
        className={{
        base: '',
        afterOpen: 'notebook-dropdown',
        beforeClose: 'notebook-dropdown-closed'}}
        overlayClassName={{
        base: '',
        afterOpen: 'notebook-dropdown-overlay',
        beforeClose: 'notebook-dropdown-overlay-closed'}}>
        <ul className="notebook-dropdown">
          {notebooks}
        </ul>
      </Modal>
    ]
  );
  }

}

export default NotebookDropdown;
