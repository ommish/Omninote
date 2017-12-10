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
          <nav className="left-nav">
            <img src="https://png.icons8.com/elephant/ios7/100/666666"/>
            <Link to="/">OMNINOTE</Link>
          </nav>
          <nav className="right-nav">
            <Link to="/login">Log In</Link>
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
          <nav className="footer-list">
            <a href= "https://github.com/ommish/Omninote" >Github</a>
            <a href= "https://www.linkedin.com/in/ommish/" >Linkedin</a>
            <a href= "http://www.ommish.com/" >Portfolio</a>
            <a href= "mailto:oshimizu15@gmail.com" >Email</a>
          </nav>
          <nav className="footer-list">
            <a href="https://icons8.com">Logo Source</a>
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
