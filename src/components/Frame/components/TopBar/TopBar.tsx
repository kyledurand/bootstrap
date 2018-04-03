import * as React from 'react';
import {Button} from '@shopify/polaris';

interface Props {
  onNavToggle?(): void;
}

export default class TopBar extends React.PureComponent<Props, never> {
  render() {
    return (
      <Button primary onClick={this.props.onNavToggle}>
        olo
      </Button>
    );
  }
}
