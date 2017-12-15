import React from 'react';
import Map from './map_container';

class MapView extends React.Component {

  constructor(props) {
    super(props);
    this.toggleMapView = this.toggleMapView.bind(this);

  }

  toggleMapView() {
    this.props.toggleMapView();
  }

  render() {

    return (
      <div
      className={this.props.mapViewOpen ? "map-view-open" : "map-view-closed"}>
      <Map/>
      <button
      onClick={this.props.toggleMapView}
      className="button green small narrow">Close</button>
      </div>
    );
  }
}

export default MapView;
