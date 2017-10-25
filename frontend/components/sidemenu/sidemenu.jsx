import Modal from 'react-modal';
import React from 'react';

class Sidemenu extends React.Component {

  constructor (props) {
    super(props);
    this.style = {
      overlay : {
          position        : 'fixed',
          top             : 0,
          left            : 0,
          right           : 0,
          bottom          : 0,
          backgroundColor : 'rgba(255, 255, 255, 0.75)',
          zIndex          : 10
        },
        content : {
          position        : 'fixed',
          top             : '100px',
          left            : '150px',
          right           : '150px',
          bottom          : '100px',
          border          : '1px solid #ccc',
          padding         : '20px',
          zIndex          : 11
        },
    };
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
          style={this.style}>
          <section>
            {this.props.notebooks.map((notebook) => <li key={notebook.id}>{notebook.title}</li>)}
          </section>
        </Modal>
      </li>
    );
  }
}

export default Sidemenu;
