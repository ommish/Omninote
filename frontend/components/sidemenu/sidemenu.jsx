import React from 'react';
import SidemenuIndexItem from './sidemenu_index_item_container';
import Modal from 'react-modal';
import CreateForm from '../entity_forms/create_form_container';

class Sidemenu extends React.Component {

  constructor (props) {
    super(props);
  }

  render () {
    return (
      <li>
        <button
          className="circle-button"
          onClick={this.props.toggleSidemenu}
          itemType={this.props.itemType}>
          <img className="sidenav-icon" src={window.staticAssets.notebook}/>
        </button>
        <Modal
          isOpen={this.props.sidemenuOpen}
          className={{
          base: '',
          afterOpen: 'sidemenu-open',
          beforeClose: 'closed-sidemenu'}}
          overlayClassName={{
          base: '',
          afterOpen: 'sidemenu-overlay',
          beforeClose: 'closed-sidemenu-overlay'}}>
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
            {this.props.items.map((item) =>
              <SidemenuIndexItem
                itemType={this.props.itemType}
                item={item}
                key={item.id}/>)}
              </section>
            </Modal>
          </li>
        );
      }
    }

    export default Sidemenu;
