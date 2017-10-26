import React from 'react';

class SidemenuIndexItem extends React.Component {

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

  handleDelete(id) {

  }

  render () {
    return (
      <li className="sidemenu-index-item" onClick={this.handleClick(this.props.notebook.id)}>
        <h3>{this.props.notebook.title}</h3>
        <p>{new Date(this.props.notebook.updatedAt).toDateString()}</p>
        <p>{this.props.notebook.noteIds.length} notes</p>
      </li>
    );
  }
}

export default SidemenuIndexItem;
