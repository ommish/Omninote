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
      saved: this.props.saved,
      timeUntilAutosave: this.props.timeUntilAutosave,
      failedSave: this.props.failedSave,
      note: this.props.note,
      tagInput: this.props.tagInput,
      image: { imageUrl: "", imageFile: "" },
      searchInput: "",
      flag: this.props.flag,
    };

    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleBodyChange = this.handleBodyChange.bind(this);

    this.createTag = this.createTag.bind(this);
    this.handleTagInput = this.handleTagInput.bind(this);

    this.selectLocation = this.selectLocation.bind(this);

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

selectLocation(location) {
  const newFlag = {
    place_id: location.place_id,
    lat: location.geometry.location.lat(),
    lng: location.geometry.location.lng(),
    title: location.name,
  }

  const newState = merge({}, this.state);
  this.props.allFlags.forEach((flag) => {
    if (flag.place_id === newFlag.place_id) {
      newState.flag = flag;
      newState.note.flagId = flag.id;
      this.setState(newState);
      return;
    }
  });

  this.props.createFlag(newFlag).then(({flag}) => {
    newState.flag = flag;
    newState.note.flagId = flag.id;
    this.setState(newState);
  }, (error) => {
    console.log(error);
  });
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
    {this.state.flag.id ?
      <h4>Flag: {this.state.flag.title}</h4> :
      <LocationSearch
      selectLocation={this.selectLocation}
      renderedOn="editor"/>}
      <Tags
      createTag={this.createTag}
      handleTagInput={this.handleTagInput}
      tagInput={this.state.tagInput}
      tags={tags}
      tagErrors={tagErrors}/>
      </div>
      <EditorLowerHeading
      handleTitleChange={this.handleTitleChange}
      setAutosaveCountdown={this.setAutosaveCountdown}
      noteTitle={this.state.note.title}
      noteErrors={noteErrors}
      saved={this.state.saved}
      handleSubmit={this.handleSubmit}
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
