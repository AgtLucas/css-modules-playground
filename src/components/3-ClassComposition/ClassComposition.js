import React from 'react';

import StyleVariantA from './StyleVariantA/StyleVariantA';
import StyleVariantB from './StyleVariantB/StyleVariantB';

export default class ClassComposition extends React.Component {

  render() {
    return(
      <div>
        <StyleVariantA />
        <br />
        <StyleVariantB />
      </div>
    );
  }

};
