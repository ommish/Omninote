import React from 'react';
import Modal from 'react-modal';

class NotebookDropdown extends React.Component {

  toggleNotebook (notebookId) {
    return (e) => {
      this.props.toggleNotebookDropdown();
      this.props.toggleSelectedNotebook(notebookId);
    };
  }

  render () {
    const notebooks = this.props.allNotebooks.map((notebook) => (
      <button onClick={this.toggleNotebook(notebook.id)}
        className={notebook.id === this.props.selectedNotebook ? "notebook-dropdown-item selected" : "notebook-dropdown-item"}
        key={notebook.id}>
        {notebook.title}
      </button>)
    );
    return (
    [
      <div className="notebook-button-div" key="a">
        <button
          className="notebook-button"
          onClick={this.props.toggleNotebookDropdown}>
          {this.props.selectedNotebook ?
            this.props.allNotebooks.filter((notebook) => (
              notebook.id === this.props.selectedNotebook)
            )[0].title :
            "Select Notebook"}▾
        </button>
      </div>,
      <Modal
        key={"b"}
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
