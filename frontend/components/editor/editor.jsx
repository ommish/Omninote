import React from 'react';
import ReactQuill from 'react-quill';
import { merge } from 'lodash';
import Modal from 'react-modal';

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
        [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
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
  this.setState(newState);
}

handleTitleChange(e) {
  let newState = merge({}, this.state);
  newState.title = e.target.value;
  this.setState(newState);
}

handleSubmit () {
  this.props.action(JSON.stringify(this.state));
}

render() {
  return (
    <main>
      <button className="notebook-selector">Select Notebook</button>
      <Modal>
        
      </Modal>
      <input
        onChange={this.handleTitleChange}
        placeholder="Title your note"
        type="text"
        className="title"
        value={this.state.title}/>
      <ReactQuill
        value={this.state.body}
        onChange={this.handleBodyChange}
        id="quill"
        modules={this.modules}
        formats={this.formats}
        placeholder="Enter your new note here"
        />
      <button onClick={this.handleSubmit}>Save Note!</button>
    </main>
  );
}
}

export default Editor;
