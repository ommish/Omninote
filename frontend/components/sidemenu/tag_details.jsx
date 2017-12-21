import React from 'react';

const TagDetails = (props) => {
  return (
    <button className="tag-details"
      onClick={props.handleClick(props.item.id)}>
      <p>{`${props.item.title}`}&nbsp;</p>
      <p>{props.item.noteIds.length}</p>
    </button>
  );
};

export default TagDetails;
