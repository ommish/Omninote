import React from 'react';
import ReactQuill from 'react-quill';
import { merge } from 'lodash';
import NotebookDropdown from './notebook_dropdown_container';
import { quillModules, quillFormats } from '../../util/quill_configs';
import { Tags } from './tags';
import { EditorLowerHeading } from './editor_lower_heading';
import LocationSearch from '../map_view/location_search';

class Editor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      saved: false,
      timeUntilAutosave: null,
      autosaving: false,
      failedSave: false,
      note: this.props.note,
      tagInput: "",
      image: { imageUrl: "", imageFile: "" },
      searchInput: "",
      flag: this.props.flag,
    };

    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleBodyChange = this.handleBodyChange.bind(this);

    this.createTag = this.createTag.bind(this);
    this.handleTagInput = this.handleTagInput.bind(this);

    this.selectLocation = this.selectLocation.bind(this);
    this.clearLocation = this.clearLocation.bind(this);

    this.handleImage = this.handleImage.bind(this);
    this.uploadImage = this.uploadImage.bind(this);

    this.attemptSave = this.attemptSave.bind(this);
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
      this.attemptSave();
    }
  }

  isValidNote() {
    return this.state.note.title !== "" && this.props.selectedNotebook.id;
  }

  attemptSave() {
    if (this.isValidNote()) {
      this.handleSubmit();
    }
  }

  redirectAfterSave(success) {
    this.props.clearTagErrors();
    this.props.clearNoteErrors();

    const currentNote = this.props.match.params.noteId;
    const currentNotebook = this.props.match.params.notebookId;
    const currentTag = this.props.match.params.tagId;
    const currentFlag = this.props.match.params.flagId;

    if (currentNote) {
      if (currentNotebook) {
        if (parseInt(currentNotebook) !== success.note.notebookId) {
          this.props.history.push(`/notebooks/${success.note.notebookId}/notes/${success.note.id}`);
        }
      }
    } else {
      if (currentNotebook) {
        this.props.history.push(`/notebooks/${success.note.notebookId}/notes/${success.note.id}`);
      } else if (currentTag) {
        this.props.history.push(`/tags/${currentTag}/notes/${success.note.id}`);
      } else if (currentFlag) {
        this.props.history.push(`flags/${currentFlag}/notes/${success.note.id}`)
      } else {
        this.props.history.push(`notes/${success.note.id}`)
      }
    }
  }

  componentWillReceiveProps(newProps) {
    if (this.props.location.pathname !== newProps.location.pathname) {
      this.props.clearTagErrors();
      this.props.clearNoteErrors();
      window.clearInterval(this.autosaveInterval);
      const resetState = {
        saved: false,
        timeUntilAutosave: null,
        autosaving: false,
        failedSave: false,
        note: newProps.note,
        tagInput: "",
        image: { imageUrl: "", imageFile: "" },
        searchInput: "",
        flag: newProps.flag,
      };
      this.setState(resetState);
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
      this.setState(newState, this.attemptSave);
    };
  }

  createTag(e) {
    if (e.key === 'Enter') {
      const newState = merge({}, this.state);
      this.props.createTag({title: e.target.value})
      .then((res) => {
        newState.note.tagIds.push(res.tag.id);
        newState.tagInput = "";
        this.setState(newState, this.attemptSave);
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

selectLocation(lat, lng, title, placeId) {
  const newFlag = {
    placeId,
    lat,
    lng,
    title,
  }
  const newState = merge({}, this.state);
  this.props.createFlag(newFlag).then(({flag}) => {
    newState.flag = flag;
    newState.note.flagId = flag.id;
    this.setState(newState, this.attemptSave);
  }, ({errors}) => {
    if (errors[0] === "has already been taken") {
      this.props.allFlags.forEach((flag) => {
        if (flag.placeId === newFlag.placeId) {
          newState.flag = flag;
          newState.note.flagId = flag.id;
          this.setState(newState, this.attemptSave);
        }
      });
    }
  });
}

clearLocation() {
  const newState = merge({}, this.state);
  newState.note.flagId = null;
  newState.flag = { id: null, placeId: null, title: "", lat: null, lng: null };
  this.setState(newState, this.attemptSave)
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
  this.props.action(newState.note).then((success) => {
    if (!newState.note.id) {
      newState.note.id = success.note.id;
    }
    newState.saved = true;
    newState.timeUntilAutosave = 2;
    this.setState(newState, () => this.redirectAfterSave(success));
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
    <div className="editor-dropdowns">
    <NotebookDropdown save={this.attemptSave}/>
    {this.state.flag.id ?
      <div><button className="button grey tiny" onClick={this.clearLocation}>X</button>{this.state.flag.title}</div> :
      <LocationSearch
      selectLocation={this.selectLocation}
      renderedOn="editor"/>}
    </div>
      <Tags
      createTag={this.createTag}
      handleTagInput={this.handleTagInput}
      tagInput={this.state.tagInput}
      tags={tags}
      tagErrors={tagErrors}/>
      </div>
      <EditorLowerHeading
      noteTitle={this.state.note.title}
      handleTitleChange={this.handleTitleChange}
      setAutosaveCountdown={this.setAutosaveCountdown}
      validNote={this.isValidNote()}
      noteErrors={noteErrors}
      saved={this.state.saved}
      save={this.attemptSave}
      toggleFullEditor={this.props.toggleFullEditor}
      fullEditor={this.props.fullEditor}/>
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
