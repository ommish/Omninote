import React from 'react';

class NotebookDropdown extends React.Component {
  constructor(props) {
    super(props);
    this.toggleNotebookDropdown = this.toggleNotebookDropdown.bind(this);
    this.handleNotebookSelection = this.handleNotebookSelection.bind(this);
  }

  toggleNotebookDropdown (e) {
    e.stopPropagation();
    this.props.toggleNotebookDropdown();
  }

  handleNotebookSelection(notebookId) {
    return (e) => {
      e.stopPropagation();
      this.props.toggleNotebookDropdown();
      this.props.toggleSelectedNotebook(notebookId);
      this.props.save();
    }
  }

  buttonText() {
    let buttonText;
    if (this.props.selectedNotebook.id) {
      const notebook = this.props.allNotebooks.filter((notebook) => (
        notebook.id === parseInt(this.props.selectedNotebook.id)
      ));
      if (notebook.length > 0) {
        buttonText = notebook[0].title;
      }
    } else {
      buttonText = "Select Notebook";
    }
    return buttonText;
  }

  render () {
    const notebooks = this.props.allNotebooks.map((notebook, i) => (
      <li
        onClick={this.handleNotebookSelection(notebook.id)}
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
      <div
        className="select-notebook"
        onClick={this.toggleNotebookDropdown}>
        <div>
        ▾ &nbsp;{this.buttonText()}
        </div>
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
        </div>);
          }
        }

        export default NotebookDropdown;
