import React from 'react';
import SidemenuIndexItem from './sidemenu_index_item_container';
import Modal from 'react-modal';
import CreateForm from '../entity_forms/create_form_container';

class Sidemenu extends React.Component {


  render () {
    return (
      <div>
      <section
        key={1}
        onClick={this.props.toggleSidemenu}
        className={this.props.sidemenuOpen ? "sidemenu-overlay" : "closed-sidemenu-overlay</section>"}>
      </section>
      <section
        className={this.props.sidemenuOpen ? "sidemenu-open" : "closed-sidemenu"}>
        <section className={`${this.props.itemType}-heading`}>
          <h2>{this.props.itemType === "notebook" ? "Notebooks" : "Tags"}</h2>
          <button
            onClick={this.props.toggleCreateForm}
            className="circle-button">
            <img className="sidenav-icon" src={window.staticAssets.plus}/>
          </button>
          <CreateForm itemType={this.props.itemType} />
        </section>
        <section>
          {this.props.items.map((item, i) =>
            <SidemenuIndexItem
              itemType={this.props.itemType}
              item={item}
              key={i}/>)}
            </section>
          </section>
        </div>
      );
    }
  }

  export default Sidemenu;
