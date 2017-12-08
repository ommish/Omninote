import React from 'react';

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
        onClick={this.toggleNotebookDropdown}>
        {this.props.selectedNotebook.id ?
          this.props.allNotebooks.filter((notebook) => (
            notebook.id === this.props.selectedNotebook.id
          ))[0].title : "Select Notebook"} ▾
          <div
            className={this.props.notebookDropdown ? "notebook-dropdown-open" : "notebook-dropdown-closed"}>
            <ul className="notebook-list">
              {notebooks}
            </ul>
          </div>
          <div
            className={this.props.notebookDropdown ? "notebook-dropdown-overlay-open" : "notebook-dropdown-overlay-closed"}
            onClick={this.toggleNotebookDropdown}>
          </div>
        </button>);
          }
        }

        export default NotebookDropdown;
