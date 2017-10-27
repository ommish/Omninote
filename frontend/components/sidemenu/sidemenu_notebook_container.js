import Sidemenu from './sidemenu';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { toggleSidemenu, toggleCreateForm } from '../../actions/ui_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    items: Object.values(state.entities.notebooks),
    sidemenuOpen: state.ui.sidemenu,
    itemType: "notebook",
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    toggleSidemenu: () => dispatch(toggleSidemenu()),
    toggleCreateForm: () => dispatch(toggleCreateForm()),
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Sidemenu));
