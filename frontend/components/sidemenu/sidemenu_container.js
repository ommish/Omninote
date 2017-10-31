import Sidemenu from './sidemenu';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { toggleCreateForm, toggleSidemenu } from '../../actions/ui_actions';
import { sortItems } from '../../util/sorters';

const mapStateToProps = (state, ownProps) => {
  return {
    items: ownProps.itemType === "notebook" ? Object.values(state.entities.notebooks) : sortItems((Object.values(state.entities.tags)), 4),
    sidemenu: state.ui.sidemenu,
    itemType: ownProps.itemType,
    sidemenuOpen: ((state.ui.sidemenu !== "hidden") && (state.ui.sidemenu !== "closed-sidemenu"))
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    toggleSidemenu: () => dispatch(toggleSidemenu()),
    toggleCreateForm: (itemType) => dispatch(toggleCreateForm(itemType)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Sidemenu);
