// @flow

import React from 'react';
import styles from './style.scss';

console.log(styles);

export default ({ title, color, content, contentLength = 10 }) => (
  <div className={styles.container}>
    <div className={styles.title}>{title}</div>
    <pre
      className={styles.content}
      style={{ color, flexBasis: `${contentLength * 9}px`, width: `${contentLength * 9}px` }}
    >
      {content}
    </pre>
  </div>
);
