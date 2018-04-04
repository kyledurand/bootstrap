import * as React from 'react';
import * as styles from './Overlay.scss';

interface Props {
  visible?: boolean;
  onClick?(): void;
}

export default function Overlay({visible, onClick}: Props) {
  return visible ? <div className={styles.Overlay} onClick={onClick} /> : null;
}
