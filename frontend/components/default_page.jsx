import React from 'react';
import SessionForm from './session/session_form_container';
import { Link } from 'react-router-dom';

class DefaultPage extends React.Component {

  constructor (props) {
    super(props);
  }

  render () {
    return (
      <div
        className="default-page">
        <header>
          <h3><img src="https://png.icons8.com/elephant/ios7/100/666666"/><Link to="/">OMNINOTE</Link></h3>
          <nav className="left-nav">
            <h4><Link to="/"></Link></h4>
            <h4><Link to="/"></Link></h4>
          </nav>
          <nav className="right-nav">
            <h4><Link to="/"></Link></h4>
            <h4><Link to="/login">Log In</Link></h4>
          </nav>
        </header>
        <main>
          <section>
            Meet Omninote, your second brain.
          </section>
          <section>
          </section>
          <section>
          </section>
          <section>
            <SessionForm />
          </section>
        </main>
        <footer>
          <nav>
            <ul className="top-footer-list">
              <li><a href= "https://github.com/ommish/Omninote" ><img src={window.staticAssets.github}></img></a></li>
              <li><a href= "https://www.linkedin.com/in/ommish/" ><img src={window.staticAssets.linkedin}></img></a></li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </nav>
          <nav>
            <ul>
              <li className="bottom-footer-list-link"><a href="https://icons8.com">Logo Source</a></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </nav>
        </footer>
      </div>
    );
  }

}

export default DefaultPage;

// button icons by
// 146 raster icons by The Working Group
// License: Creative Commons (Attribution-Share Alike 3.0 Unported)
