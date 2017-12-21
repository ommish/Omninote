import React from 'react';
import SidemenuIndexItem from './sidemenu_index_item_container';
import CreateForm from '../entity_forms/create_form_container';
import DeleteForm from '../entity_forms/delete_form_container';
import SidemenuHeading from './sidemenu_heading';

class Sidemenu extends React.Component {

  constructor(props) {
    super(props);
    this.state = { searchQuery: "" };
    this.handleSearchInput = this.handleSearchInput.bind(this);
  }

  componentWillReceiveProps(newProps) {
    if (this.props.sidemenuOpen !== newProps.sidemenuOpen) {
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
        onClick={this.props.toggleSidemenu}
        className={this.props.sidemenuOpen ? "sidemenu-overlay" : "sidemenu-overlay closed-sidemenu-overlay"}>
      </section>
      <section
        className={this.props.sidemenu}>
        <SidemenuHeading itemType={this.props.itemType} toggleCreateForm={this.toggleCreateForm}/>
        <input type="text"
            className="search-bar"
            onChange={this.handleSearchInput}
            placeholder={`Filter by ${this.props.itemType} title`}
            value={this.state.searchQuery}/>
        <ul className={`${this.props.itemType}-sidemenu-list`}>
          {this.props.items.length < 1 ? (<div className="no-items">No {this.props.itemType}s yet!</div>) : this.queriedItemsByFirstLetter().map((item, i) => {
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
