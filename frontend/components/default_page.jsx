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
          <h4><Link to="/">OMNINOTE</Link></h4>
          <nav className="left-nav">
            <h5><Link to="/">Get Started</Link></h5>
            <h5><Link to="/">Discover</Link></h5>
          </nav>
          <nav className="right-nav">
            <h5><Link to="/">Download</Link></h5>
            <h5><Link to="/login">Log In</Link></h5>
          </nav>
        </header>
        <main>
          <section>
            Meet Omninote, your second brain.
          </section>
          <section>
            <SessionForm />
          </section>
        </main>
        <footer>
          <nav>
            <ul>
              <li>FB</li>
              <li>TW</li>
              <li>LI</li>
              <li>YT</li>
              <li>ME</li>
            </ul>
          </nav>
          <nav>
            <ul>
              <li>Contact</li>
              <li>Careers</li>
              <li>Forum</li>
              <li>Developers</li>
              <li>Privacy</li>
            </ul>
          </nav>
          <nav>
            <ul>
              <li>© 2017 Omninote Corporation. All rights reserved.</li>
              <li>Language</li>
            </ul>
          </nav>
        </footer>
      </div>
    );
  }

}

export default DefaultPage;
