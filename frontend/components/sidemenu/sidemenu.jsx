import React from 'react';
import NotebookIndexItem from './notebook_index_item';

class Sidemenu extends React.Component {

  constructor (props) {
    super(props);
  }

  componentWillReceiveProps (newProps) {
    if ((!this.props.sidemenuOpen) && (this.props.sidemenuOpen !== newProps.sidemenuOpen)) {
      this.props.fetchAction();
    }
  }

  render () {
    return (
      <li>
        <button className="circle-button" onClick={this.props.toggleSidemenu}>
          NBS
        </button>
        <aside
          className={this.props.sidemenuOpen ? "open-sidemenu" : "closed-sidemenu"}>
            <section className={`${this.props.itemType}-heading`}>
              <h3>{this.props.itemType === "notebook" ? "Notebooks" : "Tags"}</h3>
              <button
                onClick={() => {}}
                className="circle-button">
                +NB
              </button>
            </section>
          <section>
            {this.props.notebooks.map((notebook) =>
              <NotebookIndexItem
                onClick={this.props.toggleSidemenu}
                notebook={notebook}
                key={notebook.id}
                toggleSidemenu={this.props.toggleSidemenu}/>)}
          </section>
        </aside>
      </li>
    );
  }
}

export default Sidemenu;
