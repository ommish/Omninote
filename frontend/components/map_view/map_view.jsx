import React from 'react';
import Map from './map_container';
import LocationSearch from './location_search';
import DeleteForm from '../entity_forms/delete_form_container';

class MapView extends React.Component {

  constructor(props) {
    super(props);
    this.setFlagsInRange = this.setFlagsInRange.bind(this);
    this.state = {flagsInRange: [], mapCenter: {lat: 40.7128, lng: -74.0060}, mapBounds: {}};

    this.setMapCenter = this.setMapCenter.bind(this);
    this.getNotesInRange = this.getNotesInRange.bind(this);
    this.updateBounds = this.updateBounds.bind(this);
  }

  getUserLocation() {
    if (!this.state.mapCenter.lat) {
      navigator.geolocation.getCurrentPosition(this.setMapCenter, () => this.setMapCenter({lat: 40.7128, lng: -74.0060}));
    }
  }

  setMapCenter(location) {
    this.setState({mapCenter: {lat: location.geometry.location.lat(), lng: location.geometry.location.lng()}});
  }

  setFlagsInRange(flagsInRange) {
    this.setState({flagsInRange});
  }

  updateBounds(mapBounds) {
    this.setState({mapBounds})
  }

  handleClick (flagId) {
    return (e) => {
      if (e.target.id === "delete") {
        this.props.toggleDeleteForm(flagId);
        e.stopPropagation();
      } else {
        this.props.toggleMapView();
        const path = `/flags/${flagId}`;
        if (this.props.location.pathname !== path)  {
          this.props.history.push(path);
        }
        e.stopPropagation();
      }
    }
    };

  getNotesInRange() {
    this.props.toggleMapView();
    this.props.history.push(`/searchbylocation/${this.state.flagsInRange.map((flag) => flag.id).join(",")}`);
  }

  componentDidMount() {
    this.getUserLocation();
  }

  render() {

    const flagsInRange = this.state.flagsInRange.map((flag, i) => {
      return (
        <li key={i} className="flag-list-item" onClick={this.handleClick(flag.id)}>
        <h4>{flag.title}</h4>
        <p>{flag.noteIds.length} notes</p>
        <img id="delete"
          className={`${this.props.itemType}-trash-icon`}
          onClick={this.handleClick(flag.id)}
          src={window.staticAssets.trash}/>
        </li>
      );
    });

    return (
      <div
      className={this.props.mapViewOpen ? "map-view" : "map-view closed"}>
      <div className="flag-list">
      <button
      onClick={this.getNotesInRange}
      className="button green">
      See all notes in this area
      </button>
      <h3>Flags</h3>
      <ul>
      {flagsInRange}
      </ul>
      </div>
      <LocationSearch selectLocation={this.setMapCenter} renderedOn="map"/>
      <Map
      setFlagsInRange={this.setFlagsInRange}
      mapCenter={this.state.mapCenter}
      updateBounds={this.updateBounds}
      redirectToFlagPage={this.redirectToFlagPage}/>
      <button
      onClick={this.props.toggleMapView}
      className="button green small narrow">Close</button>
      <DeleteForm itemType="flag"/>
      </div>
    );
  }
}

export default MapView;
