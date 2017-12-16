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

    this.googleMap.addListener('bounds_changed', (e) => {
      this.findFlagsInRange();
      this.props.updateBounds(this.googleMap.getBounds());
    });

    this.infoWindow = new google.maps.InfoWindow({content: ""});

    this.setMarkers();

    this.mapLoaded = true;
  }

  findFlagsInRange() {
    const flagsInRange = this.props.flagsWithNotes.filter(
      (flag) => this.googleMap.getBounds().contains({lat: flag.lat,lng: flag.lng,})
    );
    this.props.setFlagsInRange(flagsInRange);
  }

  setMarkers() {
    this.props.flagsWithNotes.forEach((flag) => {
      const marker = new google.maps.Marker({
        position: {
          lat: flag.lat,
          lng: flag.lng,
        },
        title: flag.title,
        label: `${flag.noteIds.length}`,
        map: this.googleMap,
      });

      let flagNoteTitles = ""
      flag.flagNotes.forEach((flagNote) => flagNoteTitles += `<li class="firstHeading">${flagNote.title}</li>`)
      const infoHeading = flag.noteIds.length > 0 ? `<h4 class="firstHeading">Notes at ${flag.title}:</h4>` : `<h4 class="firstHeading">No notes for ${flag.title}</h4>`
      marker.infoWindowContent =
        `<div>`+
        `${infoHeading}`+
        `<ul>`+
        `${flagNoteTitles}`+
        `</ul>`+
        '</div>';
      marker.addListener('click', () => {
        this.infoWindow.setContent(marker.infoWindowContent);
        this.infoWindow.open(this.googleMap, marker);
      });
    });
  }

  componentDidMount() {
    this.mapDiv = document.getElementById('map');
  }

  componentWillReceiveProps(newProps) {
    if (this.props.mapCenter.lat !== newProps.mapCenter.lat || this.props.mapCenter.lng !== newProps.mapCenter.lng) {
      this.googleMap.panTo(newProps.mapCenter);
    } else if (this.mapLoaded && this.props.flagsWithNotes !== newProps.flagsWithNotes) {
      this.findFlagsInRange();
      this.setMarkers();
    }
  }

  render() {
    if (!this.mapLoaded && this.mapDiv && window.google) {
      this.setMap();
    }

    return (
      <div id="map"></div>
    );
  }
}

export default Map;
