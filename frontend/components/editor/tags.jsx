import React from 'react';

export const Tags = (props) => {
  return (
    <div className="tags">
    <div className="tags-label">
    Add Tags:
    <input type="text"
    placeholder="Create Tag"
    className="tag-input"
    onKeyPress={props.createTag}
    onChange={props.handleTagInput}
    value={props.tagInput}/>
    <ul className="editor-errors">{props.tagErrors}</ul>
    </div>
    <ul className="tag-list">
    {props.tags}
    </ul>
    </div>
  );
};
