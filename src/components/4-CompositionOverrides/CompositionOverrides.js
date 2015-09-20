import stylest from './CompositionOverrides.css';

import React from 'react';

export default class CompositionOverrides extends React.Component {

  render() {
    return(
      <div className={styles.root}>
        <p className={styles.text}>Class Composition with Overrides</p>
      </div>
    )
  }

};
