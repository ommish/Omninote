import React from 'react';
import ReactQuill from 'react-quill';
import { merge } from 'lodash';
import Modal from 'react-modal';
import NotebookDropdown from './notebook_dropdown_container';
import { quillModules, quillFormats } from '../../util/quill_configs';

class Editor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      note: this.props.note,
      tagInput: this.props.tagInput,
      image: { imageUrl: "", imageFile: "" },
    };

    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleBodyChange = this.handleBodyChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.createTag = this.createTag.bind(this);
    this.handleTagInput = this.handleTagInput.bind(this);

    this.handleImage = this.handleImage.bind(this);
    this.uploadImage = this.uploadImage.bind(this);

    this.quillEditor = null;
  }



// on component will receive props- if new pathname, and new note exists,
// save current note THEN set state with new props
// 


  componentWillReceiveProps(newProps) {
    if (this.props.location.pathname !== newProps.location.pathname) {
      this.setState(newProps);
      if (this.props.tagErrors.length > 0 || this.props.noteErrors.length > 0) {
        this.props.clearTagErrors();
        this.props.clearNoteErrors();
        this.setState(newProps);
      }
    } else if (this.props.note.tagIds.length !== newProps.note.tagIds.length) {
      this.props.clearTagErrors();
      this.props.clearNoteErrors();
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
        this.props.clearTagErrors();
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
    const newState = merge({}, this.state);
    newState.note.title = e.target.value;
    this.setState(newState);
  }

  handleImage(e) {
    const reader = new FileReader();
    const file = e.target.files[0];
    const newState = merge({}, this.state);
    reader.onloadend = () => {
      newState.image = {imageUrl: reader.result, imageFile: file};
      this.setState(newState);
      this.uploadImage();
    };
    if (file) {
      reader.readAsDataURL(file);
    } else {
      newState.image = { imageUrl: "", imageFile: null };
      this.setState(newState);
    }
  }

  uploadImage() {
    const file = this.state.image.imageFile;
    const photoData = new FormData();
    if (file) {
      photoData.append("photo[image]", file);
      this.props.createPhoto(photoData).then((res) => {
        this.appendPhotoToNote(res.photo.imageUrl);
      });
    }
  }

  appendPhotoToNote(url) {
    const newState = merge({}, this.state);
    newState.note.body = this.quillEditor.getEditorContents().concat(`<img src=${url}/>`);
    newState.image = { imageUrl: "", imageFile: null };
    this.setState(newState);
  }

  handleSubmit() {
    const newState = merge({}, this.state);
    newState.note.notebookId = this.props.selectedNotebook.id;
    this.props.action(newState.note).then((success) => {
      if (this.props.fullEditor) {
        this.props.toggleFullEditor();
      }
      this.props.history.push(`/notebooks/${success.note.notebookId}/notes/${success.note.id}`);
      this.props.clearNoteErrors();
      this.props.clearTagErrors();
    });
  }

  render() {
    const tags = this.props.allTags.map((tag) => {
      return (
        <button
          key={tag.id}
          onClick={this.handleTagClick(tag.id)}
          className={this.state.note.tagIds.includes(tag.id) ? "tag-button selected" : "tag-button"}>
          {tag.title}
        </button>
      );
    });
    const noteErrors = this.props.noteErrors.map((err) => <li key={err}>{err}</li>);
    const tagErrors = this.props.tagErrors.map((err) => <li key={err}>{err}</li>);

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
            <ul className="editor-errors">{tagErrors}</ul>
          </div>
          <div className="editor-lower-heading">
            <input
              onChange={this.handleTitleChange}
              placeholder="Title your note"
              type="text"
              className="title"
              value={this.state.note.title}/>
            <ul className="editor-errors">{noteErrors}</ul>
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
          <label>Add an image:&nbsp;&nbsp;&nbsp;
            <input type="file"
              onChange={this.handleImage}
              accept=".png, .gif, .jpg, .jpeg"/>
          </label>
          <ReactQuill
            ref={(input) => { this.quillEditor = input; }}
            id="quill"
            className={this.props.fullEditor ?
              "note-editor-quill full " :
              "note-editor-quill"}
              modules={quillModules}
              formats={quillFormats}
              value={this.state.note.body}
              onChange={this.handleBodyChange}/>
          </main>
        );
      }
    }

    export default Editor;
