import styles from './ScopedSelectors.css';

import React from 'react';

export default class ScopedSelectors extends React.Component {

  render() {
    return(
      <div className={ styles.root }>
        <p className={ styles.text }>Scoped Selectors</p>
      </div>
    );
  }

};
