import { connect } from 'react-redux';
import SidemenuIndexItem from './sidemenu_index_item';
import { fetchNotebook,  } from '../../actions/notebook_actions';

const mapStateToProps = (state) => {
  return {

  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    // fetchItem={this.props.fetchItem}
    // toggleSidemenu={this.props.toggleSidemenu}
    // fetchItem: (notebookId) => dispatch(fetchNotebook(notebookId)),
    // delete: (notebookId) => dispatch(deleteNotebook(notebookId)),
    // toggleSidemenu: () => dispatch(toggleSidemenu()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SidemenuIndexItem);
