import React from 'react';

class Map extends React.Component {

  constructor(props) {
    super(props);
    this.userLocation = window.localStorage.getItem("userLocation") ? JSON.parse(window.localStorage.getItem("userLocation")) : "";
    this.mapLoaded = false;

    this.setUserLocation = this.setUserLocation.bind(this);
    this.setDefaultLocation = this.setDefaultLocation.bind(this);
  }

  setUserLocation(position) {
    this.userLocation = {lat: position.coords.latitude, lng: position.coords.longitude,};
    window.localStorage.setItem("userLocation", JSON.stringify(this.userLocation));
  }

  setDefaultLocation(error) {
    this.userLocation = {lat: 40.7128, lng: -74.0060};
  }

  setMap() {
    if (!this.userLocation) {
      navigator.geolocation.getCurrentPosition(this.setUserLocation, this.setDefaultLocation);
    }
    if (window.google) {
      this.googleMap = new google.maps.Map(this.mapDiv, {
        zoom: 8,
        center: {
          lat: this.userLocation.lat,
          lng: this.userLocation.lng,
        },
      });
      this.props.flags.forEach((flag) => {
        new google.maps.Marker({
          position: {
            lat: flag.lat,
            lng: flag.lng,
          },
          map: this.googleMap,
        });
      });

      this.googleMap.addListener('bounds_changed', (e) => {
        this.findFlagsInRange();
      });
      this.mapLoaded = true;
    }
  }

  findFlagsInRange() {
    const flagsInRange = this.props.flags.filter(
      (flag) => this.googleMap.getBounds().contains({lat: flag.lat,lng: flag.lng,})
    );
    this.props.setFlagsInRange(flagsInRange);
  }

  toggleMapView() {
    this.props.toggleMapView();
  }

  componentDidMount() {
    this.mapDiv = document.getElementById('map');
  }

  render() {
    if (!this.mapLoaded && this.mapDiv) {
      this.setMap();
    }

    return (
      <div id="map"></div>
    );
  }
}

export default Map;
