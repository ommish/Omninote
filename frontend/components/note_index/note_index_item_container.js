import { connect } from 'react-redux';
import NoteIndexItem from './note_index_item';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state, ownProps) => {
  let bodySnippet = ownProps.note.body;
  let holder;
  let holderType;
  if (bodySnippet.length > 40) {
    bodySnippet = bodySnippet.slice(0, 40).concat("...");
  }
  if (ownProps.notebook) {
    holder = ownProps.notebook;
    holderType = "notebooks";
  }
  return {
    holder,
    holderType,
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
