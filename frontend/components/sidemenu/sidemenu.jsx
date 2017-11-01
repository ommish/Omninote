import React from 'react';
import SidemenuIndexItem from './sidemenu_index_item_container';
import Modal from 'react-modal';
import CreateForm from '../entity_forms/create_form_container';
import DeleteForm from '../entity_forms/delete_form_container';

class Sidemenu extends React.Component {

  toggleCreateForm(itemType) {
    return (e) => {
      this.props.toggleCreateForm(itemType);
    };
  }

  render () {
    return (
      <div>
      <section
        key={1}
        onClick={this.props.toggleSidemenu}
        className={this.props.sidemenuOpen ? "sidemenu-overlay" : "hidden"}>
      </section>
      <section
        className={this.props.sidemenu}>
        <section className="sidemenu-heading">
          <h2>{this.props.itemType === "notebook" ? "Notebooks" : "Tags"}</h2>
          <button
            onClick={this.toggleCreateForm(this.props.itemType)}
            className="circle-button">
            <img className="sidenav-icon" src={window.staticAssets.plus}/>
          </button>
          <CreateForm itemType={this.props.itemType} />
        </section>
        <ul className={`${this.props.itemType}-sidemenu-list`}>
          {this.props.items.map((item, i) =>
            <SidemenuIndexItem
              itemType={this.props.itemType}
              item={item}
              key={i}/>)}
            </ul>
          </section>
          <DeleteForm itemType={this.props.itemType}/>
        </div>
      );
    }
  }

  export default Sidemenu;
