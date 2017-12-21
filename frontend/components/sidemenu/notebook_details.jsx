import React from 'react';

const NotebookDetails = (props) => {
  return (
    <ul className="notebook-details"
      onClick={props.handleClick(props.item.id)}>
      <li><h3>{props.item.title}</h3></li>
      <li>{new Date(props.item.updatedAt).toDateString()}</li>
      <li>{`${props.item.noteIds.length} ${props.notePluralized}`}</li>
    </ul>
  )
}

export default NotebookDetails;
