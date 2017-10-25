import Sidemenu from './sidemenu';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { toggleSidemenu } from '../../actions/ui_actions';
import { fetchNotebooks } from '../../actions/notebook_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    notebooks: Object.values(state.entities.notebooks),
    sidemenuOpen: state.ui.sidemenu,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    toggleSidemenu: () => dispatch(toggleSidemenu()),
    action: () => dispatch(fetchNotebooks()),
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Sidemenu));
