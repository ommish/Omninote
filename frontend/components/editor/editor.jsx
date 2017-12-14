import React from 'react';
import ReactQuill from 'react-quill';
import { merge } from 'lodash';
import NotebookDropdown from './notebook_dropdown_container';
import { quillModules, quillFormats } from '../../util/quill_configs';

class Editor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      saved: this.props.saved,
      timeUntilAutosave: this.props.timeUntilAutosave,
      failedSave: this.props.failedSave,
      note: this.props.note,
      tagInput: this.props.tagInput,
      image: { imageUrl: "", imageFile: "" },
    };

    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleBodyChange = this.handleBodyChange.bind(this);

    this.createTag = this.createTag.bind(this);
    this.handleTagInput = this.handleTagInput.bind(this);

    this.handleImage = this.handleImage.bind(this);
    this.uploadImage = this.uploadImage.bind(this);

    this.handleSubmit = this.handleSubmit.bind(this);
    this.autosaveCountdown = this.autosaveCountdown.bind(this);
    this.setAutosaveCountdown = this.setAutosaveCountdown.bind(this);
    this.resetAutosaveCountdown = this.resetAutosaveCountdown.bind(this);

    this.quillEditor = null;
  }

  setAutosaveCountdown(e) {
    if (!this.state.autosaving) {
      this.setState({autosaving: true});
      this.autosaveInterval = window.setInterval(this.autosaveCountdown, 1000);
    }
  }

  autosaveCountdown() {
    this.setState({timeUntilAutosave: this.state.timeUntilAutosave - 1});
    if (this.state.timeUntilAutosave <= 0 && !this.state.saved && !this.state.failedSave) {
      if (this.state.note.title !== "" && this.props.selectedNotebook.id) {
        this.handleSubmit();
      }
    }
  }

  redirectAfterSave(currentNote, currentNotebook, success) {
    this.props.clearTagErrors();
    this.props.clearNoteErrors();
    if (!currentNote) {
      if (!currentNotebook) {
        this.props.history.push(`/notes/${success.note.id}`);
      } else {
        this.props.history.push(`/notebooks/${success.note.notebookId}/notes/${success.note.id}`);
      }
    } else {
      if (currentNotebook && parseInt(currentNotebook) !== success.note.notebookId) {
        this.props.history.push(`/notebooks/${success.note.notebookId}/notes/${success.note.id}`);
      }
    }
  }

  componentWillReceiveProps(newProps) {
    const isNewPath = this.props.location.pathname !== newProps.location.pathname;
    if (isNewPath) {
      this.props.clearTagErrors();
      this.props.clearNoteErrors();
      window.clearInterval(this.autosaveInterval);
      this.setState(newProps);
    }
  }

  handleTagClick (tagId) {
    return (e) => {
      const newState = merge({}, this.state);
      if (newState.note.tagIds.includes(tagId)) {
        newState.note.tagIds = newState.note.tagIds.filter((id) => id !== tagId);
      } else {
        newState.note.tagIds.push(tagId);
      }
      this.resetAutosaveCountdown(newState);
    };
  }

  createTag(e) {
    if (e.key === 'Enter') {
      const newState = merge({}, this.state);
      this.props.createTag({title: e.target.value})
      .then((res) => {
        newState.note.tagIds.push(res.tag.id);
        newState.tagInput = "";
        this.resetAutosaveCountdown(newState);
      }, (fail) => {
        if (fail.errors.includes("tag already exists")) {
          const tag = this.props.allTags.filter((tag) => tag.title.toLowerCase() === newState.tagInput.toLowerCase())[0];
          newState.tagInput = "";
          this.props.clearTagErrors();
          this.setState(newState);
          if (!newState.note.tagIds.includes(tag.id)) {
            this.handleTagClick(tag.id)();
          }
        }
      }
    );
  }
}

resetAutosaveCountdown(newState) {
  newState.timeUntilAutosave = 2;
  newState.saved = false;
  newState.failedSave = false;
  this.setState(newState);
}

handleTagInput(e) {
  const newTagInput = e.target.value;
  if (this.props.tagErrors.length > 0) {
    this.props.clearTagErrors();
  }
  this.setState({tagInput: newTagInput});
}

handleBodyChange (content, delta, source, editor) {
  const newState = merge({}, this.state);
  newState.note =  merge(newState.note, {body: content, bodyPlain: editor.getText().trim()});
  this.resetAutosaveCountdown(newState);
}

handleTitleChange(e) {
  const newState = merge({}, this.state);
  newState.note.title = e.target.value;
  this.resetAutosaveCountdown(newState)
}

handleImage(e) {
  const reader = new FileReader();
  const file = e.target.files[0];
  let newImage = merge({}, this.state.image);
  reader.onloadend = () => {
    newImage = {imageUrl: reader.result, imageFile: file};
    this.setState({image: newImage});
    this.uploadImage();
  };
  if (file) {
    reader.readAsDataURL(file);
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
  newState.note.bodyPlain = newState.note.bodyPlain.slice(0, 100);
  if (newState.note.tagIds.length === 0) {
    newState.note.tagIds = [""];
  }
  this.setState(newState);
  const currentNote = this.props.match.params.noteId;
  const currentNotebook = this.props.match.params.notebookId;
  this.props.action(newState.note).then((success) => {
    if (!newState.note.id) {
      newState.note.id = success.note.id;
    }
    newState.saved = true;
    newState.timeUntilAutosave = 2;
    this.setState(newState);
    this.redirectAfterSave(currentNote, currentNotebook, success)
  },
  (fail) => {
    newState.failedSave = true;
    this.setState(newState);
  });
}

render() {
  const tags = this.props.allTags.map((tag) => {
    return (
      <li key={tag.id}>
      <button
      onClick={this.handleTagClick(tag.id)}
      className={this.state.note.tagIds.includes(tag.id) ? "tag-button selected" : "tag-button"}>
      {tag.title}
      </button>
      </li>
    );
  });
  const noteErrors = this.props.noteErrors.map((err) => <li key={err}>{err}</li>);
  const tagErrors = this.props.tagErrors.map((err) => <li key={err}>{err}</li>);

  return (
    <main
    className={this.props.fullEditor ? "note-editor full-editor" : "note-editor"}>
      <div className="editor-heading">
        <NotebookDropdown/>
        <div className="tags">
        <div className="tags-label">
        Select Tags:
        <input type="text"
        placeholder="Create new tag"
        className="tag-input"
        onKeyPress={this.createTag}
        onChange={this.handleTagInput}
        value={this.state.tagInput}/>
        <ul className="editor-errors">{tagErrors}</ul>
        </div>
        <ul className="tag-list">
        {tags}
        </ul>
        </div>
        </div>
    <div className="editor-lower-heading">
    <input
    onChange={this.handleTitleChange}
    onFocus={this.setAutosaveCountdown}
    placeholder="Title your note"
    type="text"
    className="title"
    value={this.state.note.title}/>
    <div className="editor-buttons">
    <ul className="editor-errors">{noteErrors}</ul>
    <div className="saved">{this.state.saved ? "Saved!" : ""}</div>
    <button
    disabled={this.state.note.title === "" ? true : false}
    className={this.state.note.title === "" ? "button green small narrow disabled" : "button green small narrow"}
    onClick={this.handleSubmit}>Save</button>
    <button
    className={"button green small narrow"}
    onClick={this.props.toggleFullEditor}>
    {this.props.fullEditor ? "Close" : "Expand"}
    </button>
    </div>
    </div>
    <label>Add an image:&nbsp;&nbsp;&nbsp;
    <input type="file"
    onChange={this.handleImage}
    onFocus={this.setAutosaveCountdown}
    accept=".png, .gif, .jpg, .jpeg"/>
    </label>
    <ReactQuill
    ref={(input) => { this.quillEditor = input; }}
    id="quill"
    className="note-editor-quill"
    modules={quillModules}
    formats={quillFormats}
    value={this.state.note.body}
    onFocus={this.setAutosaveCountdown}
    onChange={this.handleBodyChange}/>
    </main>
  );
}
}

export default Editor;
