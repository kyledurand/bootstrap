import * as React from 'react';
import {autobind} from 'utilities';
import {Content, Nav, TopBar} from './components';
import './Frame.css';

class Frame extends React.Component {
  render() {
    return (
      <>
        <TopBar onNavToggle={this.handleNavToggle} />
        <Nav />
        <Content />
      </>
    );
  }

  @autobind
  private handleNavToggle() {
    console.log('handle nav toggle');
  }
}

export default Frame;
