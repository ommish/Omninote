import React from 'react';
import SidemenuIndexItem from './sidemenu_index_item_container';
import CreateForm from '../entity_forms/create_form_container';
import DeleteForm from '../entity_forms/delete_form_container';

class Sidemenu extends React.Component {

  constructor() {
    super();
    this.state = { searchQuery: "" };
    this.handleSearchInput = this.handleSearchInput.bind(this);
    this.toggleSidemenu = this.toggleSidemenu.bind(this);
  }

  componentWillReceiveProps(newProps) {
    if (this.props.location.pathname !== newProps.location.pathname) {
      this.setState({searchQuery: ""});
    }
  }

  handleSearchInput(e) {
    const newState = {searchQuery: e.target.value};
    this.setState(newState);
  }

  toggleCreateForm(itemType) {
    return (e) => {
      this.props.toggleCreateForm(itemType);
    };
  }

  toggleSidemenu() {
    this.props.toggleSidemenu();
    this.setState({searchQuery: ""});
  }

  render () {
    return (
      <div>
      <section
        key={1}
        onClick={this.toggleSidemenu}
        className={this.props.sidemenuOpen ? "sidemenu-overlay" : "sidemenu-overlay closed-sidemenu-overlay"}>
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
        </section>
        <input type="text"
            className="search-bar"
            onChange={this.handleSearchInput}
            placeholder={`Filter by ${this.props.itemType} title`}
            value={this.state.searchQuery}/>
        <ul className={`${this.props.itemType}-sidemenu-list`}>
          {this.props.items.map((item, i) => {
            if (item.title.toLowerCase().includes(this.state.searchQuery.toLowerCase())) {
              return (
                <SidemenuIndexItem
                  itemType={this.props.itemType}
                  item={item}
                  key={i} />
              );
            }
          })}
            </ul>
          </section>
          <DeleteForm itemType={this.props.itemType}/>
        </div>
      );
    }
  }

  export default Sidemenu;
