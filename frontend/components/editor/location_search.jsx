import React from 'react';

class LocationSearch extends React.Component {
  constructor(props) {
    super(props);
  }

  setAutocomplete() {
    const options = {
    }
    this.locationAutocomplete = new google.maps.places.Autocomplete(this.searchInputEl, options);
    new google.maps.places.SearchBox();
    this.locationAutocomplete.addListener('place_changed', (e) => {
      this.props.selectLocation(this.locationAutocomplete.getPlace());
    });
  }

  componentDidMount() {
    this.searchInputEl = document.getElementById('location-search-input');
  }

  render() {
    if (this.searchInputEl && window.google && !this.locationAutocomplete) {
      this.setAutocomplete();
    }

    return (
      <input
      placeholder="Add Flag"
      id="location-search-input"
      onChange={this.props.handleSearchInput}
      size="50"/>
    );
  }
};

export default LocationSearch;
