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
      <ul className="notebook-details">
        <li><h3>{this.props.item.title}</h3></li>
      <li>{new Date(this.props.item.updatedAt).toDateString()}</li>
    <li>{this.props.item.noteIds.length} notes</li>
      </ul>
    );
  }else {
    details = (
      <section className="tag-details">
        <h3>{this.props.item.title}<p>{this.props.item.noteIds.length}</p></h3>
      </section>
    );
  }

    return (
      [
        <li key={1} className={`${this.props.itemType}-index-item`} onClick={this.handleClick(this.props.item.id)}>
          {details}
          <img
            id="delete"
            className="trash-icon"
            onClick={this.handleClick(this.props.item.id)}
            src={window.staticAssets.trash}/>
        </li>,
        <DeleteForm key={2} item={this.props.item} itemType={this.props.itemType} />]
        );
      }
    }

    export default SidemenuIndexItem;
