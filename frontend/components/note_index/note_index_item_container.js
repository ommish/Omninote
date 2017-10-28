import { connect } from 'react-redux';
import NoteIndexItem from './note_index_item';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state, ownProps) => {
  let bodySnippet = ownProps.note.bodyPlain || "";
  if (bodySnippet.length > 40) {
    bodySnippet = bodySnippet.slice(0, 40).concat("...");
  }

  return {
    bodySnippet,
  };
};
//
// const mapDispatchToProps = (state, ownProps) => {
//   return {
//
//   };
// };

export default withRouter(connect(mapStateToProps, null)(NoteIndexItem));
