import React, { Component } from 'react';

class Info extends Component {

  render() {
    return (
      <div className="Info">
        <ul>
          <li>
            <a href="https://instagram.com/vivekstagram" target="_blank" rel="noopener noreferrer">Instagram</a>
          </li>
          <li>
            <a href="https://linkedin.com/in/patelviv" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </li>
          <li>
            <a href="https://github.com/vivkpatl" target="_blank" rel="noopener noreferrer">GitHub</a>
          </li>
          <li>
            <a href="https://drive.google.com/file/d/1tI2evOsAA0bQUs6BwBD5BZjw42nt6QbZ/view?usp=sharing" target="_blank" rel="noopener noreferrer">Resume</a>
          </li>
        </ul>
      </div>
    );
  }

}

export default Info;