import Map from './map';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { flagsWithNotes } from '../../util/filter_util';

const mapStateToProps = (state, ownProps) => {
  const flags = Object.values(state.entities.flags);
  const notes = Object.values(state.entities.notes);
  return {
    flags: flags,
    notes: notes,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Map);
