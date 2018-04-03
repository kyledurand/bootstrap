import * as React from 'react';
import {Button} from '@shopify/polaris';
import {menu} from 'icons';
import * as styles from './TopBar.scss';
console.log(styles.TopBar);

interface Props {
  onNavToggle?(): void;
}

export default class TopBar extends React.PureComponent<Props, never> {
  render() {
    return (
      <div className={styles.TopBar}>
        <Button primary onClick={this.props.onNavToggle} icon={menu} />
      </div>
    );
  }
}
