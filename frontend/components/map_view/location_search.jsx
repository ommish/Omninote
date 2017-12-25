import React from 'react';

class LocationSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {inputVal: ""};
  }

  setAutocomplete() {
    const options = {
    };
    this.locationAutocomplete = new google.maps.places.Autocomplete(this.searchInputEl, options);
    this.locationAutocomplete.addListener('place_changed', (e) => {
      const location = this.locationAutocomplete.getPlace();
      this.props.selectLocation(location.geometry.location.lat(), location.geometry.location.lng(), location.name, location.place_id, location.formatted_address);
    });
  }

  componentDidMount() {
    this.searchInputEl = document.getElementById(`location-search-input-${this.props.renderedOn}`);
  }

  render() {
    if (this.searchInputEl && window.google && !this.locationAutocomplete) {
      this.setAutocomplete();
    }
    const placeholder = this.props.renderedOn === "map" ? " ⚐ Search Location" : " ⚐ Add Flag";

    return (
      <div>
      <input
      placeholder={placeholder}
      id={`location-search-input-${this.props.renderedOn}`}
      size={this.props.renderedOn === "editor" ? "50" : "70"}/>
      </div>
    );
  }
}

export default LocationSearch;
