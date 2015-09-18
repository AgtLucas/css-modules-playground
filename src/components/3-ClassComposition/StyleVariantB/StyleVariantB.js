import styles from './StyleVariantB.css';

import React from 'react';

export default class StyleVariantB extends React.Component {

  render() {
    return(
      <div className={styles.root}>
        <p className={styles.text}>Style Variant B</p>
      </div>
    );
  }

};
