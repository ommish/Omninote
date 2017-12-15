import Modal from 'react-modal';

class MapView extends React.Component {


  constructor(props) {
    suoer(props);
  }

  componentDidMount() {
    // request user's geolocation and save to session slice of state to use for map center
    const newYork = {latitude: 40.7128, longitute: -74.0060};
    this.googleMap = new google.maps.Map(document.getElementById('map'),
    {zoom: 4,
      center: {
          latitude: newYork.latitude,
          longitute: newYork.longitute,
        },
      });

      // does Marker accept multiple arguments or an array of positions?
    this.marker = new google.maps.Marker({
      position: {
        latitude: newYork.latitude,
        longitute: newYork.longitute,
      },
      map: this.googleMap,
    });
  }

  render() {

    <Modal
    ariaHideApp={false}
    isOpen={() => true}>
    <div id="map"></div>

    </Modal>

  }
}

export default MapView;
