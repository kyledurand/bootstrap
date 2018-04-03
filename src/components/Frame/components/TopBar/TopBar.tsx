import * as React from 'react';
import {Icon} from '@shopify/polaris';

import {menu} from 'icons';
import * as styles from './TopBar.scss';

interface Props {
  onNavToggle?(): void;
}

export default class TopBar extends React.PureComponent<Props, never> {
  render() {
    return (
      <div className={styles.TopBar}>
        <button className={styles.NavToggle} onClick={this.props.onNavToggle}>
          <Icon source={menu} />
        </button>
      </div>
    );
  }
}
