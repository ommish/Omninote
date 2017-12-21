import Sidemenu from './sidemenu';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { toggleCreateForm, toggleSidemenu } from '../../actions/ui_actions';
import { sortItems } from '../../util/sorters';

const mapStateToProps = (state, ownProps) => {
  return {
    items: sortItems(Object.values(state.entities[`${state.ui.sidemenuItemType}s`]), 4),
    sidemenu: state.ui.sidemenu,
    itemType: state.ui.sidemenuItemType,
    sidemenuOpen: ((state.ui.sidemenu === "sidemenu-open"))
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    toggleSidemenu: () => dispatch(toggleSidemenu()),
    toggleCreateForm: (itemType) => dispatch(toggleCreateForm(itemType)),
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Sidemenu));
