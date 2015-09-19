import styles from './ScopedAnimations.css';

import React from 'react';

export default class ScopedAnimations extends React.Component {

  render() {
    return(
      <div className={styles.root}>
        <div className={styles.ball} />
      </div>
    );
  }

};
