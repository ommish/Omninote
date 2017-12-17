import React from 'react';

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
    let details;
    const notePluralized = this.props.item.noteIds.length === 1 ? "note" : "notes";
    if (this.props.itemType === "notebook") {
      details = (
      <ul className="notebook-details"
        onClick={this.handleClick(this.props.item.id)}>
        <li><h3>{this.props.item.title}</h3></li>
      <li>{new Date(this.props.item.updatedAt).toDateString()}</li>
    <li>{`${this.props.item.noteIds.length} ${notePluralized}`}</li>
      </ul>
    );
  }else {
    details = (
      <button className="tag-details"
        onClick={this.handleClick(this.props.item.id)}>
        <p>{`${this.props.item.title}`}&nbsp;</p>
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
