import * as React from 'react';
import {classNames} from '@shopify/react-utilities/styles';
import * as styles from './Content.scss';

interface Props {
  navIsVisible?: boolean;
}

export default function Content({navIsVisible}: Props) {
  const className = classNames(
    styles.Content,
    navIsVisible && styles.ContentWithNav,
  );

  return <div className={className}>Contents</div>;
}
