import React from 'react';
import SessionForm from './session/session_form_container';

class DefaultPage extends React.Component {

  render () {
    return (
      <div>
        <header>OMNINOTE</header>
        <main>
          <SessionForm />
        </main>
        <footer>Footer1</footer>
        <footer>Footer2</footer>
        <footer>Footer3</footer>
      </div>
    );
  }

}

export default DefaultPage;
