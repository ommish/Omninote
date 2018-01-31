import React from 'react';

export const EditorLowerHeading = (props) => {
  return (
    <div className="editor-lower-heading">
    <input
    onChange={props.handleTitleChange}
    onFocus={props.startAutosave}
    placeholder="Title your note"
    type="text"
    className="title"
    value={props.noteTitle}/>
    <div className="editor-buttons">
    <ul className="editor-errors">{props.noteErrors}</ul>
    <div className="saved">{props.saved ? "Saved!" : ""}</div>
    <button
    disabled={props.validNote ? false : true}
    className={props.validNote ? "button green small narrow" : "button green small narrow disabled"}
    onClick={props.save}>Save</button>
    <button
    className={"button green small narrow"}
    onClick={props.toggleFullEditor}>
    {props.fullEditor ? "Close" : "Expand"}
    </button>
    </div>
    </div>
  );
};
