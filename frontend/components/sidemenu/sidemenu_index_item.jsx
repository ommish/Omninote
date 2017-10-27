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
    return (
      [
        <li key={1} className="sidemenu-index-item" onClick={this.handleClick(this.props.item.id)}>
          <section>
            <h3>{this.props.titleSnippet}</h3>
            <p>{new Date(this.props.item.updatedAt).toDateString()}</p>
            <p>{this.props.item.noteIds.length} notes</p>
          </section>
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
