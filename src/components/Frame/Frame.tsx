import * as React from 'react';
import './Frame.css';

const logo = require('./images/logo.svg');

class Frame extends React.Component {
  render() {
    return (
      <div className="Frame">
        <header className="Frame-header">
          <img src={logo} className="Frame-logo" alt="logo" />
          <h1 className="Frame-title">Welcome to React</h1>
        </header>
        <p className="Frame-intro">
          To get started, edit <code>src/Frame.tsx</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default Frame;
