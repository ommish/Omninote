import React from 'react';

const SidemenuHeading = (props) => {
  return (
    <section className="sidemenu-heading">
      <h2>{props.itemType.toUpperCase().concat("s")}</h2>
      <button
        onClick={props.toggleCreateForm(props.itemType)}
        className="circle-button">
        <img className="sidenav-icon" src={window.staticAssets.plus}/>
      </button>
    </section>
  );
};

export default SidemenuHeading;
