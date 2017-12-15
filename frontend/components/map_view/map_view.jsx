import React from 'react';
import Map from './map_container';

class MapView extends React.Component {

  constructor(props) {
    super(props);
    this.toggleMapView = this.toggleMapView.bind(this);
    this.setFlagsInRange = this.setFlagsInRange.bind(this);
    this.state = {flagsInRange: []};
  }

  toggleMapView() {
    this.props.toggleMapView();
  }

  setFlagsInRange(flagsInRange) {
    this.setState({flagsInRange});
  }

  redirectToFlagPage(flagId) {
    return (e) => {
      this.toggleMapView();
      this.props.history.push(`/flags/${flagId}`);
      console.log(`/flags/${flagId}`)
    }
  }

  render() {

    const flagsInRange = this.state.flagsInRange.map((flag, i) => {
      return (
        <li key={i} className="flag-list-item" onClick={this.redirectToFlagPage(flag.id)}>
        <h4>{flag.title}</h4>
        <p>{flag.noteIds.length} notes</p>
        </li>
      );
    });

    return (
      <div
      className={this.props.mapViewOpen ? "map-view" : "map-view closed"}>
      <ul className="flag-list">
      {flagsInRange}
      </ul>
      <Map setFlagsInRange={this.setFlagsInRange}/>
      <button
      onClick={this.props.toggleMapView}
      className="button green small narrow">Close</button>
      </div>
    );
  }
}

export default MapView;
