import { connect } from 'react-redux';
import NoteIndexItem from './note_index_item';

const mapStateToProps = (state, ownProps) => {
  let bodySnippet = ownProps.item.body;
  if (titleSnippet.length > 30) {
    titleSnippet = titleSnippet.slice(0, 30).concat("...");
  }
  return {

  };
};

const mapDispatchToProps = (state, ownProps) => {
  return {

  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NoteIndexItem);
