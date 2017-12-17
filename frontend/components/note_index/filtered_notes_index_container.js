import { connect } from 'react-redux';
import NoteIndex from './note_index';
import { sortItems } from '../../util/sorters';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state, ownProps) => {
  let itemType;
  if (ownProps.match.params.notebookId) {
    itemType = 'notebook';
  } else if (ownProps.match.params.tagId) {
    itemType = 'tag';
  } else if (ownProps.match.params.flagId) {
    itemType = 'flag';
  }

  let notes = [];
  const noteOrder = state.ui.noteOrder;
  const fullEditor = state.ui.fullEditor;
  const item = state.entities[`${itemType}s`][ownProps.match.params[`${itemType}Id`]];
  const noteIndexHeader = `${itemType.toUpperCase()}: ${item.title}`;
  const noteIds = item.noteIds;
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
