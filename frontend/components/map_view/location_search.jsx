import React from 'react';

class LocationSearch extends React.Component {
  constructor(props) {
    super(props);
  }

  setAutocomplete() {
    const options = {
    }
    this.locationAutocomplete = new google.maps.places.Autocomplete(this.searchInputEl, options);
    this.locationAutocomplete.addListener('place_changed', (e) => {
      this.props.selectLocation(this.locationAutocomplete.getPlace());
    });
  }

  componentDidMount() {
    this.searchInputEl = document.getElementById(`location-search-input-${this.props.renderedOn}`);
  }

  render() {
    if (this.searchInputEl && window.google && !this.locationAutocomplete) {
      this.setAutocomplete();
    }
    const placeholder = this.props.renderedOn === "map" ? "Search Location" : "Add Flag"

    return (
      <input
      placeholder={placeholder}
      id={`location-search-input-${this.props.renderedOn}`}
      size="50"/>
    );
  }
};

export default LocationSearch;
