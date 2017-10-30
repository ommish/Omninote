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
      this.setState({ title: "", body: "", bodyPlain: "", notebookId: this.props.selectedNotebook.id});
    }
  }

  componentWillReceiveProps(newProps) {
    if (this.props.location.pathname !== newProps.location.pathname) {
      this.setState(newProps.note);
    }
  }

  handleBodyChange (content, delta, source, editor) {
    const newState = merge({}, this.state);
    this.setState({body: content, bodyPlain: editor.getText().trim()});
  }

  handleTitleChange(e) {
    let newState = merge({}, this.state);
    newState.title = e.target.value;
    this.setState(newState);
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
