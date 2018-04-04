import * as React from 'react';
import {autobind} from 'utilities';
import {Content, Nav, Overlay, TopBar} from './components';
import './Frame.css';

interface State {
  navVisible: boolean;
  overlayVisible: boolean;
}

class Frame extends React.PureComponent<{}, State> {
  state: State = {
    navVisible: false,
    overlayVisible: false,
  };

  render() {
    const {overlayVisible, navVisible} = this.state;

    return (
      <>
        <TopBar onNavToggle={this.handleNavToggle} />
        <Overlay visible={overlayVisible} onClick={this.handleOverlayClick} />
        <Nav
          visible={navVisible}
          items={[
            {
              label: 'Link 1',
              url: 'https://link1.com',
            },
            {
              label: 'Link 2',
              url: 'https://link3.com',
            },
            {
              label: 'Link 3',
              url: 'https://link3.com',
            },
          ]}
        />
        <Content />
      </>
    );
  }

  @autobind
  private handleNavToggle() {
    this.setState(({overlayVisible}) => ({overlayVisible: !overlayVisible}));
  }

  @autobind
  private handleOverlayClick() {
    this.setState({overlayVisible: false});
  }
}

export default Frame;
