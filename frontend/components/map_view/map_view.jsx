import React from 'react';
import Map from './map_container';
import LocationSearch from './location_search';
import DeleteForm from '../entity_forms/delete_form_container';

class MapView extends React.Component {

  constructor(props) {
    super(props);
    this.setFlagsInRange = this.setFlagsInRange.bind(this);
    this.state = {flagsInRange: [], mapCenter: {lat: 40.7128, lng: -74.0060}, mapBounds: undefined};

    this.setMapCenter = this.setMapCenter.bind(this);
    this.getNotesInRange = this.getNotesInRange.bind(this);
    this.updateBounds = this.updateBounds.bind(this);
  }

  getUserLocation() {
    if (!this.state.mapCenter.lat) {
      navigator.geolocation.getCurrentPosition(this.setMapCenter, () => this.setMapCenter({lat: 40.7128, lng: -74.0060}));
    }
  }

  setMapCenter(lat, lng) {
    this.setState({mapCenter: {lat, lng}});
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
    let query;
    if (this.state.flagsInRange.length > 0) {
      query = this.state.flagsInRange.map((flag) => flag.id).join(",");
    } else {
      query = "noflags"
    }
    this.props.history.push(`/searchbylocation/${query}`);
  }

  componentDidMount() {
    this.getUserLocation();
  }

  render() {

    const flagsInRange = this.state.flagsInRange.map((flag, i) => {
      const notePluralized = flag.noteIds.length === 1 ? "note" : "notes";
      return (
        <li key={i} className="flag-list-item" onClick={this.handleClick(flag.id)}>
        <p>{flag.title}</p>
        <div>
          <h4>{`${flag.noteIds.length} ${notePluralized}`}</h4>
          <img id="delete"
            className={`flag-trash-icon`}
            onClick={this.handleClick(flag.id)}
            src={window.staticAssets.trash}/>
          </div>
        </li>
      );
    });

    return (
      <div
      className={this.props.mapViewOpen ? "map-view" : "map-view closed"}>
        <div className="flag-list">
        <div className="flag-list-header">
          <h3>Flags</h3>
        </div>
          <button
          onClick={this.getNotesInRange}
          className="button">
          See all notes in this area
          </button>
          <ul>
            {flagsInRange}
          </ul>
        </div>
        <div className="map-div">
        <div className="map-inputs">
          <LocationSearch
          selectLocation={this.setMapCenter}
          renderedOn="map"/>
          <button
          onClick={this.props.toggleMapView}
          className="button green small narrow">Close</button>
          </div>
          <Map
          setMapCenter={this.setMapCenter}
          updateBounds={this.updateBounds}
          mapCenter={this.state.mapCenter}
          mapBounds={this.state.mapBounds}
          setFlagsInRange={this.setFlagsInRange}
          redirectToFlagPage={this.redirectToFlagPage}/>
          </div>
        <DeleteForm itemType="flag"/>
      </div>
    );
  }
}

export default MapView;
