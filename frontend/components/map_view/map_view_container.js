import MapView from './map_view';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { toggleModal } from '../../actions/ui_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    flags: Object.values(state.entities.flags),
    mapViewOpen: state.ui.mapView,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    toggleMapView: () => dispatch(toggleModal('mapView')),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MapView);
