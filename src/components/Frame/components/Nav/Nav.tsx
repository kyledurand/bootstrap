import * as React from 'react';
import * as styles from './Nav.scss';
import {classNames} from '@shopify/react-utilities/styles';

interface Item {
  label: string;
  url: string;
}

interface Props {
  visible: boolean;
  items: Item[];
}

export default class Nav extends React.PureComponent<Props, never> {
  render() {
    const {items, visible} = this.props;
    const className = classNames(styles.Nav, visible && styles.NavVisible);

    return (
      <div className={className}>
        {items.map(({label, url}) => <div key={label}>{label}</div>)}
      </div>
    );
  }
}
