import { connect } from 'react-redux';
import NoteOrderOptionMenu from './note_order_option_menu';
import { toggleNoteOrderDropdown, toggleNoteOrder } from '../../actions/ui_actions';
import { _noteOrderOptions } from '../../reducers/ui_reducer';

const mapStateToProps = (state) => {
  return {
    noteOrder: state.ui.noteOrder,
    noteOrderDropdown: state.ui.noteOrderDropdown,
    options: _noteOrderOptions,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    toggleNoteOrderDropdown: () => dispatch(toggleNoteOrderDropdown()),
    toggleNoteOrder: (order) => dispatch(toggleNoteOrder(order)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NoteOrderOptionMenu);
