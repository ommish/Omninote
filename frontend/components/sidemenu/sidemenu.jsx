import React from 'react';
import NotebookIndexItem from './notebook_index_item';
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
          NBS
        </button>
        <Modal
          isOpen={this.props.sidemenuOpen}
          onAfterOpen={this.props.fetchItems}
          onRequestClose={this.props.toggleSidemenu}
          className='sidemenu-open'
          overlayClassName='sidemenu-overlay'>
          <section className={`${this.props.itemType}-heading`}>
            <h3>{this.props.itemType === "notebook" ? "Notebooks" : "Tags"}</h3>
            <button
              onClick={this.props.toggleCreateForm}
              className="circle-button">
              +NB
            </button>
            <CreateForm itemType={this.props.itemType} />
          </section>
          <section>
            {this.props.notebooks.map((notebook) =>
              <NotebookIndexItem
                toggleSidemenu={this.props.toggleSidemenu}
                notebook={notebook}
                fetchItem={this.props.fetchItem}
                key={notebook.id}/>)}
              </section>
            </Modal>
          </li>
        );
      }
    }

    export default Sidemenu;
