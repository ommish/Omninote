import React from 'react';
import DeleteForm from '../entity_forms/delete_form_container';

class SidemenuIndexItem extends React.Component {

  constructor (props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick (id) {
    return (e) => {
      if (e.target.id === "delete") {
        this.props.toggleDeleteForm(id);
        e.stopPropagation();
      } else {
        this.props.toggleSidemenu();
        this.props.history.push(`/${this.props.itemType}s/${this.props.item.id}`);
        e.stopPropagation();
      }
    };
  }

  render () {
    let details;
    if (this.props.itemType === "notebook") {
      details = (
      <ul className="notebook-details"
        onClick={this.handleClick(this.props.item.id)}>
        <li><h3>{this.props.item.title}</h3></li>
      <li>{new Date(this.props.item.updatedAt).toDateString()}</li>
    <li>{this.props.item.noteIds.length} notes</li>
      </ul>
    );
  }else {
    details = (
      <button className="tag-details"
        onClick={this.handleClick(this.props.item.id)}>
        <p>{`${this.props.item.title}  `}</p>
        <p>{this.props.item.noteIds.length}</p>
      </button>
    );
  }

    return (
        <li
          className={`${this.props.itemType}-index-item`}>
          {details}
          <img id="delete"
            className={`${this.props.itemType}-trash-icon`}
            onClick={this.handleClick(this.props.item.id)}
            src={window.staticAssets.trash}/>
        </li>
        );
      }
    }

    export default SidemenuIndexItem;
