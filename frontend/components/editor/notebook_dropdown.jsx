import React from 'react';
import Modal from 'react-modal';

class NotebookDropdown extends React.Component {
  constructor() {
    super();
    this.toggleNotebookDropdown = this.toggleNotebookDropdown.bind(this);
  }

  toggleNotebook (notebook) {
    return (e) => {
      e.stopPropagation();
      this.props.toggleNotebookDropdown();
      this.props.toggleSelectedNotebook(notebook);
    };
  }

  toggleNotebookDropdown (e) {
    e.stopPropagation();
    this.props.toggleNotebookDropdown();
  }

  render () {
    const notebooks = this.props.allNotebooks.map((notebook, i) => (
      <li
        onClick={this.toggleNotebook(notebook)}
        className={notebook.id === this.props.selectedNotebook.id ? "notebook-dropdown-item selected" : "notebook-dropdown-item"}
        key={i}>
        {notebook.title}</li>
    ));
    notebooks.push(
      <li
        onClick={this.props.toggleCreateForm}
        className="notebook-dropdown-item"
        key="a">
        Add New Notebook
      </li>
    );

    return (
      <button
        className="select-notebook"
        onClick={this.props.toggleNotebookDropdown}>
        {this.props.selectedNotebook.id ?
          this.props.allNotebooks.filter((notebook) => (
            notebook.id === this.props.selectedNotebook.id
          ))[0].title : "Select Notebook"} ▾
          <Modal
            isOpen={this.props.notebookDropdown}
            onRequestClose={this.toggleNotebookDropdown}
            className={{
              base: '',
              afterOpen: this.props.openDropdownClass,
              beforeClose: 'notebook-dropdown-closed'}}
              overlayClassName={{
                base: '',
                afterOpen: 'notebook-dropdown-overlay-open',
                beforeClose: 'notebook-dropdown-overlay-closed'}}>
                <ul className="notebook-list">
                  {notebooks}
                </ul>
              </Modal>
            </button>);
          }
        }

        export default NotebookDropdown;
