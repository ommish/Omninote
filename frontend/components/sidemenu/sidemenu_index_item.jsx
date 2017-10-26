import React from 'react';

class SidemenuIndexItem extends React.Component {

  constructor (props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick (e) {
      if (e.target.id === "delete") {
        this.props.deleteItem(this.props.item.id);
        e.stopPropagation();
      } else {
        this.props.fetchItem(e.target.id);
        this.props.toggleSidemenu();
    }
  }

  render () {
    return (
      <li className="sidemenu-index-item" onClick={this.handleClick}>
        <h3>{this.props.item.title}</h3>
        <p>{new Date(this.props.item.updatedAt).toDateString()}</p>
        <p>{this.props.item.noteIds.length} notes</p>
        <button id="delete" onClick={this.handleClick}>DEL</button>
      </li>
    );
  }
}

export default SidemenuIndexItem;
