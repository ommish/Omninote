import React from 'react';
import ReactQuill from 'react-quill';
import { merge } from 'lodash';
import Modal from 'react-modal';
import NotebookDropdown from './notebook_dropdown_container';
import Delta from 'quill-delta';

class Editor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {note: this.props.note, tagInput: this.props.tagInput};
    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleBodyChange = this.handleBodyChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.createTag = this.createTag.bind(this);
    this.handleTagInput = this.handleTagInput.bind(this);

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
  componentDidMount() {
    if (!this.state.note) {
      this.setState({note: {title: "", body: "", bodyPlain: "", notebookId: this.props.selectedNotebook.id, tagIds: []}});
    }
  }

  componentWillReceiveProps(newProps) {
    if (this.props.location.pathname !== newProps.location.pathname) {
      this.setState(newProps);
    } else if (this.props.note.tagIds.length !== newProps.note.tagIds.length) {
      this.setState(newProps);
    }
  }

  handleTagClick (tagId) {
    return (e) => {
      const tagIds = merge([], this.state.note.tagIds);
      const newState = merge({}, this.state);
      if (tagIds.includes(tagId)) {
        newState.note.tagIds = tagIds.filter((id) => id !== tagId);
        this.setState(newState);
      } else {
        newState.note.tagIds.push(tagId);
        this.setState(newState);
      }
    };
  }

  createTag(e) {
    if (e.key === 'Enter') {
      const newState = merge({}, this.state);
      this.props.createTag({title: e.target.value, noteIds: [this.state.note.id]})
        .then((res) => {
          if (!this.state.note.tagIds.includes(res.tag.id)) {
            newState.note.tagIds.push(res.tag.id);
            newState.tagInput = "";
            this.setState(newState);
          }
        });
    }
  }

  handleTagInput(e) {
    const newState = merge({}, this.state);
    newState.tagInput = e.target.value;
    this.setState(newState);
  }

  handleBodyChange (content, delta, source, editor) {
    const newState = merge({}, this.state);
    const newNote = merge(newState.note, {body: content, bodyPlain: editor.getText().trim()});
    newState.note = newNote;
    this.setState(newState);
  }

  handleTitleChange(e) {
    let newState = merge({}, this.state);
    newState.note.title = e.target.value;
    this.setState(newState);
  }

  handleSubmit() {
    let newState = merge({}, this.state);
    newState.note.notebookId = this.props.selectedNotebook.id;
    this.props.action(newState.note);
    if (this.props.fullEditor) {
      this.props.toggleFullEditor();
    }
  }

  render() {
    const that = this;
    const tags = this.props.allTags.map((tag) => {
      return (
        <button
          key={tag.id}
          onClick={that.handleTagClick(tag.id)}
          className={that.state.note.tagIds.includes(tag.id) ? "tag-button selected" : "tag-button"}>
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
            <input type="text"
            placeholder="Create new tag"
            onKeyPress={this.createTag}
            onChange={this.handleTagInput}
            value={this.state.tagInput}/>
          </div>
          <div className="editor-lower-heading">
            <input
              onChange={this.handleTitleChange}
              placeholder="Title your note"
              type="text"
              className="title"
              value={this.state.note.title}/>
            <div className="editor-buttons">
              <button
                disabled={this.state.note.title === "" ? true : false}
                className={this.state.note.title === "" ? "square-button small narrow disabled" : "square-button small narrow"}
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
              value={this.state.note.body}
              onChange={this.handleBodyChange}/>
          </main>
        );
      }
    }

    export default Editor;
