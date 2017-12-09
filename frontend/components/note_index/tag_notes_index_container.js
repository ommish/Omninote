
import { connect } from 'react-redux';
import NoteIndex from './note_index';
import { sortItems } from '../../util/sorters';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state, ownProps) => {
  let notes = [];
  const noteOrder = state.ui.noteOrder;
  const fullEditor = state.ui.fullEditor;
  const tag = state.entities.tags[ownProps.match.params.tagId];
  const noteIndexHeader = `Tag: ${tag.title}`;
  const noteIds = tag.noteIds;
  noteIds.forEach((noteId) => notes.push(state.entities.notes[noteId]));
  notes = sortItems(notes, noteOrder);
  return {
    noteIndexHeader,
    notes,
    noteOrder,
    fullEditor,
  };
};

export default withRouter(connect(mapStateToProps, null)(NoteIndex));
