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
        <li
          onClick={this.toggleNotebook(notebook)}
          className={notebook.id === this.props.selectedNotebook.id ? "notebook-dropdown-item selected" : "notebook-dropdown-item"}
          key={i}>
          {notebook.title}</li>
      ));
    notebooks.push([
      <li
      onClick={this.props.toggleCreateForm}
      className="notebook-dropdown-item"
      key="a">
      Add New Notebook
    </li>,
    <CreateForm
      itemType="notebook"
      key="b"
    /> ]);

    return (
      <div>
        <button
          className="select-notebook"
          onClick={this.props.toggleNotebookDropdown}>
          {this.props.selectedNotebook.id ?
            this.props.allNotebooks.filter((notebook) => (
            notebook.id === this.props.selectedNotebook.id
          ))[0].title : "Select Notebook"} ▾
        </button>
        <Modal
          isOpen={this.props.notebookDropdown}
          onRequestClose={this.props.toggleNotebookDropdown}
          className={{
            base: '',
            afterOpen: 'notebook-dropdown-open',
            beforeClose: 'notebook-dropdown-closed'}}
            overlayClassName={{
              base: '',
              afterOpen: 'notebook-dropdown-overlay-open',
              beforeClose: 'notebook-dropdown-overlay-closed'}}>
              <ul className="notebook-list">
                {notebooks}
              </ul>
            </Modal>
          </div>  );
  }

}

export default NotebookDropdown;
