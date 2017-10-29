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
    this.handleBodyChange = this.handleBodyChange.bind(this);
    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.modules = {
      toolbar: [
        ['bold', 'italic', 'underline', 'strike'],
        ['blockquote', 'code-block'],
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
      'color', 'background', 'align', 'clean', 'direction'
    ];
  }

  handleBodyChange (content, delta, source, editor) {
    const newState = merge({}, this.state);
    newState.body = editor.getContents();
    newState.body_plain = editor.getText().trim();
    this.setState(newState);
  }

  handleTitleChange(e) {
    let newState = merge({}, this.state);
    newState.title = e.target.value;
    this.setState(newState);
  }

  handleSubmit() {
    let newState = merge({}, this.state);
    newState.notebookId = this.props.selectedNotebook.id;
    newState.body = JSON.stringify(newState.body); // can't save- quill error unless I do this ?
    this.props.action(newState);
    // this.setState({ title: "", body: {}, bodyPlain: "", notebookId: this.props.selectedNotebook.id});
    if (this.props.fullEditor) {
      this.props.toggleFullEditor();
    }
  }

  componentWillReceiveProps(newProps) {
    if (this.props.location.pathname !== newProps.location.pathname) {
      this.setState(newProps.note);
    }
  }

  componentWillMount() {
    if (!this.state) {
      this.setState({ title: "", body: {}, bodyPlain: "", notebookId: this.props.selectedNotebook.id});
    }
  }

  render() {
    return (
      <main
        className={this.props.fullEditor ?
          "note-editor full" :
          "note-editor"}>
          <div className="editor-heading">
            <NotebookDropdown />
            <div className="editor-lower-heading">
              <input
                onChange={this.handleTitleChange}
                placeholder="Title your note"
                type="text"
                className="title"
                value={this.state.title}/>
              <button
                className="square-button small narrow"
                onClick={this.handleSubmit}>Save</button>
              <button
                className="square-button small narrow"
                onClick={this.props.toggleFullEditor}>
                <img
                  className="sidenav-icon"
                  src={this.props.fullEditor ? window.staticAssets.notes : window.staticAssets.notes}>
                </img>
                </button>
            </div>
          </div>
          <ReactQuill
            value={this.state.body}
            id="quill"
            className={this.props.fullEditor ?
              "note-editor-quill full " :
              "note-editor-quill"}
            modules={this.modules}
            formats={this.formats}
            onChange={this.handleBodyChange}/>
        </main>
      );
    }
  }

  export default Editor;
