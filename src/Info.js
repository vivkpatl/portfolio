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
            <a href="https://drive.google.com/file/d/1DBA1sR4d6vHi9i-ydGqEUwZ8ZTnxr5_M/view?usp=sharing" target="_blank" rel="noopener noreferrer">Resume</a>
          </li>
        </ul>
      </div>
    );
  }

}

export default Info;