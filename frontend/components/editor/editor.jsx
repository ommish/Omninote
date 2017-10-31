import React from 'react';
import ReactQuill from 'react-quill';
import { merge } from 'lodash';
import Modal from 'react-modal';
import NotebookDropdown from './notebook_dropdown_container';
import Delta from 'quill-delta';

class Editor extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.note;
    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleBodyChange = this.handleBodyChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.createTag = this.createTag.bind(this);

    // Quill configs
    this.modules = {
      toolbar: [
        ['bold', 'italic', 'underline', 'strike'],
        ['blockquote', 'code-block'],
        ['image'],
        [{ 'list': 'ordered'}, { 'list': 'bullet' }],
        [{ 'script': 'sub'}, { 'script': 'super' }],
        [{ 'indent': '-1'}, { 'indent': '+1' }],
        [{ 'direction': 'rtl' }],
        [{ 'size': ['small', false, 'large', 'huge'] }],
        [{ 'color': [] }, { 'background': [] }],
        [{ 'font': [] }],
        [{ 'align': [] }],
        ['clean']
      ]
    };

    this.formats = [
      'header', 'font', 'size', 'bold', 'italic', 'underline', 'strike',
      'blockquote', 'code-block', 'list', 'bullet', 'script', 'indent',
      'color', 'background', 'align', 'clean', 'direction', 'image'
    ];
  }


  // prevent errors from trying to load content before fetch complete
  componentWillMount() {
    if (!this.state) {
      this.setState({ title: "", body: "", bodyPlain: "", notebookId: this.props.selectedNotebook.id, tagIds: []});
    }
  }

  componentWillReceiveProps(newProps) {
    if (this.props.location.pathname !== newProps.location.pathname) {
      this.setState(newProps.note);
    } else if (this.props.note.tagIds.length !== newProps.note.tagIds.length) {
      this.setState(newProps.note);
    }
  }

  handleTagClick (tagId) {
    return (e) => {
      const tagIds = merge([], this.state.tagIds);
      if (tagIds.includes(tagId)) {
        this.setState({tagIds: tagIds.filter((id) => id !== tagId)});
      } else {
        tagIds.push(tagId);
        this.setState({tagIds});
      }
    };
  }

  createTag(e) {
    if (e.key === 'Enter') {
      this.props.createTag({title: e.target.value, noteIds: [this.state.id]})
        .then(() => {
          if (!tagIds.includes(tagId)) {
            tagIds.push(tagId);
            this.setState({tagIds});
          }
        });
    }
  }

  handleBodyChange (content, delta, source, editor) {
    this.setState({body: content, bodyPlain: editor.getText().trim()});
  }

  handleTitleChange(e) {
    // let newState = merge({}, this.state);
    // newState.title = e.target.value;
    this.setState({title: e.target.value});
  }

  handleSubmit() {
    let newState = merge({}, this.state);
    newState.notebookId = this.props.selectedNotebook.id;
    this.props.action(newState);
    if (this.props.fullEditor) {
      this.props.toggleFullEditor();
    }
  }

  render() {
    const tags = this.props.allTags.map((tag) => {
      return (
        <button
          key={tag.id}
          onClick={this.handleTagClick(tag.id)}
          className={!this.state.tagIds.includes(tag.id) ? "tag-button" : "tag-button selected"}>
          {tag.title}
        </button>
      );
    });
    return (
      <main
        className={this.props.fullEditor ?
          "note-editor full" :
          "note-editor"}>
          <div className="editor-heading">
            <NotebookDropdown />
            Tags: {tags}
            <input type="text" placeholder="Create new tag" onKeyPress={this.createTag}/>
          </div>
          <div className="editor-lower-heading">
            <input
              onChange={this.handleTitleChange}
              placeholder="Title your note"
              type="text"
              className="title"
              value={this.state.title}/>
            <div className="editor-buttons">
              <button
                className="square-button small narrow"
                onClick={this.handleSubmit}>Save</button>
              <button
                className={"square-button small narrow expand"}
                onClick={this.props.toggleFullEditor}>
                {this.props.fullEditor ? "Close" : <img
                  className="sidenav-icon"
                  src={window.staticAssets.white_expand}>
                </img>}
              </button>
            </div>
          </div>
          <ReactQuill
            id="quill"
            className={this.props.fullEditor ?
              "note-editor-quill full " :
              "note-editor-quill"}
              modules={this.modules}
              formats={this.formats}
              value={this.state.body}
              onChange={this.handleBodyChange}/>
          </main>
        );
      }
    }

    export default Editor;
