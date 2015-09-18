import styles from './StyleVariantA.css';

import React from 'react';

export default class StyleVariantA extends React.Component {

  render() {
    return(
      <div className={styles.root}>
        <p className={styles.text}>Style Variant A</p>
      </div>
    );
  }

};
