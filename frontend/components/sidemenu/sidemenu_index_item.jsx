import React from 'react';
import NotebookDetails from './notebook_details';
import TagDetails from './tag_details';

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
        const path = `/${this.props.itemType}s/${this.props.item.id}`;
        if (this.props.location.pathname !== path)  {
          this.props.history.push(path);
        }
        e.stopPropagation();
      }
    };
  }

  render () {
    const notePluralized = this.props.item.noteIds.length === 1 ? "note" : "notes";
    return (
        <li
          className={`${this.props.itemType}-index-item`}>
          {this.props.itemType === "notebook" ?
            <NotebookDetails item={this.props.item} handleClick={this.handleClick} notePluralized={notePluralized} /> :
            <TagDetails item={this.props.item} handleClick={this.handleClick} notePluralized={notePluralized} /> }
          <img id="delete"
            className={`${this.props.itemType}-trash-icon`}
            onClick={this.handleClick(this.props.item.id)}
            src={window.staticAssets.trash}/>
        </li>
        );
      }
    }

export default SidemenuIndexItem;
