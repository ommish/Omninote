import React from 'react';

class NotebookIndexItem extends React.Component {

  constructor (props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick (id) {
    return (e) => {
      this.props.toggleSidemenu();
      this.props.fetchItem(id);
    };
  }

  render () {
    return (
      <li className="notebook-index-item" onClick={this.handleClick(this.props.notebook.id)}>
        <h4>{this.props.notebook.title}</h4>
        <p>{new Date(this.props.notebook.updatedAt).toDateString()}</p>
        <p>{this.props.notebook.noteIds.length} notes</p>
      </li>
    );
  }
}

export default NotebookIndexItem;
