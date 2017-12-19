import React from 'react';

class Map extends React.Component {

  constructor(props) {
    super(props);
    this.mapLoaded = false;
  }

  setMap() {
    this.googleMap = new google.maps.Map(this.mapDiv, {
      zoom: 8,
      center: {
        lat: this.props.mapCenter.lat,
        lng: this.props.mapCenter.lng,
      },
    });

    this.props.updateBounds(this.googleMap.getBounds());

    this.googleMap.addListener('bounds_changed', (e) => {
      this.props.updateBounds(this.googleMap.getBounds());
      this.props.setMapCenter(this.googleMap.getCenter().lat(), this.googleMap.getCenter().lng())
      this.findFlagsInRange();
    });

    this.infoWindow = new google.maps.InfoWindow({content: ""});

    this.props.setMarkers(this.props.flags, this.googleMap, this.infoWindow, this.props.notes);

    this.mapLoaded = true;
  }

  findFlagsInRange() {
    const flagsInRange = this.props.flags.filter(
      (flag) => this.props.mapBounds.contains({lat: flag.lat,lng: flag.lng,})
    );
    this.props.setFlagsInRange(flagsInRange);
  }

  componentDidMount() {
    this.mapDiv = document.getElementById('map');
  }

  componentWillReceiveProps(newProps) {
    if (!this.mapLoaded && this.mapDiv && window.google) {
      this.setMap();
    } else if (this.mapLoaded && (this.props.mapCenter.lat !== newProps.mapCenter.lat || this.props.mapCenter.lng !== newProps.mapCenter.lng)) {
      this.googleMap.panTo(newProps.mapCenter);
    } else if (this.mapLoaded && this.props.mapBounds && this.props.flags !== newProps.flags) {
      this.findFlagsInRange();
    }
  }

  render() {
    return (
      <div id="map"></div>
    );
  }
}

export default Map;
