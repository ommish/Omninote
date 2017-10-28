import React from 'react';
import Modal from 'react-modal';

class NotebookDropdown extends React.Component {

  toggleNotebook (notebook) {
    return (e) => {
      this.props.toggleNotebookDropdown();
      this.props.toggleSelectedNotebook(notebook);
    };
  }

  render () {
    const notebooks = this.props.notebookTitles.map((title, i) => (
      <button onClick={this.toggleNotebook(this.props.notebookTitles[title])}
        className={this.props.notebookTitles[title] === this.props.selectedNotebook.id ? "notebook-dropdown-item selected" : "notebook-dropdown-item"}
        key={i}>
        {Object.keys(title)[0]}
      </button>)
    );
    return (
    [
      <div className="notebook-button-div" key="a">
        <button
          className="notebook-button"
          onClick={this.props.toggleNotebookDropdown}>
          {this.props.selectedNotebook.title}▾
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
