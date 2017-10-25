import Modal from 'react-modal';
import React from 'react';
import NotebookIndexItem from './notebook_index_item';

class Sidemenu extends React.Component {

  constructor (props) {
    super(props);
  }

  render () {
    return (
      <li>
        <button onClick={this.props.toggleSidemenu}>
          NBS
        </button>
        <Modal
          isOpen={this.props.sidemenuOpen}
          onRequestClose={this.props.toggleSidemenu}
          onAfterOpen={this.props.action}
          className={{
              base: '',
              afterOpen: 'open-sidemenu',
              beforeClose: 'closed-sidemenu'
            }}
            overlayClassName={{
              base: '',
              afterOpen: 'open-sidemenu-overlay',
              beforeClose: 'closed-sidemenu-overlay'
            }}>
          <section>
            {this.props.notebooks.map((notebook) =>
              <NotebookIndexItem
                notebook={notebook}
                key={notebook.id}
                toggleSidemenu={this.props.toggleSidemenu}/>)}
          </section>
        </Modal>
      </li>
    );
  }
}

export default Sidemenu;
