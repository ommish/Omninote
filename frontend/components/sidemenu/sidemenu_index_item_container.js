import { connect } from 'react-redux';
import SidemenuIndexItem from './sidemenu_index_item';
import { toggleDeleteForm, toggleSidemenu } from '../../actions/ui_actions';
import { withRouter } from 'react-router-dom';

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    toggleSidemenu: () => dispatch(toggleSidemenu()),
    toggleDeleteForm: (id) => dispatch(toggleDeleteForm(id)),
  };
};

export default withRouter(connect(null, mapDispatchToProps)(SidemenuIndexItem));
