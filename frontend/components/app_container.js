import { connect } from 'react-redux';
import App from './app';
import { fetchAll } from '../actions/entity_actions';

const mapStateToProps = (state) => {
    return {
    notes: state.entities.notes,
    itemType: state.ui.createForm.itemType
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchAll: () => dispatch(fetchAll()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
