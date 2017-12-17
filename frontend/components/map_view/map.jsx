import React from 'react';

class Map extends React.Component {

  constructor(props) {
    super(props);
    this.mapLoaded = false;
    this.markers = {};
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

    this.setMarkers();

    this.mapLoaded = true;
  }

  findFlagsInRange() {
    const flagsInRange = this.props.flags.filter(
      (flag) => this.props.mapBounds.contains({lat: flag.lat,lng: flag.lng,})
    );
    this.props.setFlagsInRange(flagsInRange);
  }

  setMarkers() {
    this.props.flags.forEach((flag) => {
      this.createMarker(flag);
    });
  }

  createMarker(flag) {
    const marker = new google.maps.Marker({
      position: {
        lat: flag.lat,
        lng: flag.lng,
      },
      title: flag.title,
      label: `${flag.noteIds.length}`,
      map: this.googleMap,
    });

    this.markers[flag.id] = marker;

    this.setInfoWIndowContent(flag);

    this.markers[flag.id].addListener('click', () => {
      this.infoWindow.setContent(this.markers[flag.id].infoWindowContent);
      this.infoWindow.open(this.googleMap, this.markers[flag.id]);
    });
  }

  updateMarkers(newProps) {
    newProps.flags.forEach((flag) => {
      if (!this.markers[flag.id]) {
        this.createMarker(flag);
      } else {
        this.markers[flag.id].setLabel(`${flag.noteIds.length}`)
        this.setInfoWIndowContent(flag);
      }
    });
  }

  setInfoWIndowContent(flag) {
    let flagNoteTitles = ""
    this.props.notes.filter((note) => note.flagId === flag.id).forEach((note) => flagNoteTitles += `<li class="firstHeading">${note.title}</li>`);
    const infoHeading = flag.noteIds.length > 0 ? `<h4 class="firstHeading">Notes at ${flag.title}:</h4>` : `<h4 class="firstHeading">No notes for ${flag.title}</h4>`
    this.markers[flag.id].infoWindowContent =
      `<div>`+
      `${infoHeading}`+
      `<ul>`+
      `${flagNoteTitles}`+
      `</ul>`+
      '</div>';
  }

  componentDidMount() {
    this.mapDiv = document.getElementById('map');
  }

  componentWillReceiveProps(newProps) {
    if (!this.mapLoaded && this.mapDiv && window.google) {
      this.setMap();
    } else if (this.mapLoaded && (this.props.mapCenter.lat !== newProps.mapCenter.lat || this.props.mapCenter.lng !== newProps.mapCenter.lng)) {
      this.googleMap.panTo(newProps.mapCenter);
    } else if (this.mapLoaded && (this.props.flags !== newProps.flags || this.props.notes !== newProps.props.notes)) {
      this.updateMarkers(newProps);
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
