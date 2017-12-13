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

  queriedItemsByFirstLetter() {
    const allItems = [];
    let firstItem = true;
    this.props.items.forEach((item, i) => {
      if (item.title.toLowerCase().includes(this.state.searchQuery.toLowerCase())) {
        if (firstItem || this.props.items[i - 1].title.slice(0, 1).toUpperCase() !== item.title.slice(0, 1).toUpperCase()) {
          allItems.push(item.title.slice(0, 1).toUpperCase());
          firstItem = false;
        }
        allItems.push(item);
      }
    });
    return allItems;
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
          {this.queriedItemsByFirstLetter().map((item, i) => {
            if (typeof item !== "string") {
              return (
                <SidemenuIndexItem
                  itemType={this.props.itemType}
                  item={item}
                  key={i} />
              );
            } else {
              return (
                <li key={i} className={`${this.props.itemType}-separator`}>{item}</li>
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
