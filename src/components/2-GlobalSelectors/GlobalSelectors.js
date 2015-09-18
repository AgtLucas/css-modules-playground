import styles from './GlobalSelectors.css';

import React from 'react';

export default class GlobalSelectors extends React.Component {

  render() {
    return(
      <div className={ styles.root }>
        <p className="text">Global Selectors</p>
      </div>
    );
  }

};