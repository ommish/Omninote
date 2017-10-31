
import { connect } from 'react-redux';
import NoteIndex from './note_index';
import { sortNotes } from '../../util/sorters';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state, ownProps) => {
  let notes = [];
  const noteOrder = state.ui.noteOrder;
  if (state.entities.tags.initialState) {
    return {
      noteIndexHeader: "",
      notes,
      noteOrder,
    };
  } else {
    const tag = state.entities.tags[ownProps.match.params.tagId];
    const noteIndexHeader = `Tag: ${tag.title}`;
    const noteIds = tag.noteIds;
    noteIds.forEach((noteId) => notes.push(state.entities.notes[noteId]));
    notes = sortNotes(notes, noteOrder);
    return {
      noteIndexHeader,
      notes,
      noteOrder,
    };
  }
};

export default withRouter(connect(mapStateToProps, null)(NoteIndex));
