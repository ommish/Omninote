import { connect } from 'react-redux';
import NoteOrderOptionMenu from './note_order_option_menu';
import { toggleModal, toggleNoteOrder } from '../../actions/ui_actions';

const noteOrderOptions = [
  'Date Updated (newest first) ',
  'Date Created (newest first)',
  'Date Updated (oldest first)',
  'Date Created (oldest first)',
  'Title (ascending)',
  'Title (descending)'];

const mapStateToProps = (state) => {
  return {
    noteOrder: state.ui.noteOrder,
    noteOrderDropdown: state.ui.noteOrderDropdown,
    options: noteOrderOptions,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    toggleNoteOrderDropdown: () => dispatch(toggleModal("noteOrderDropdown")),
    toggleNoteOrder: (order) => dispatch(toggleNoteOrder(order)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NoteOrderOptionMenu);
