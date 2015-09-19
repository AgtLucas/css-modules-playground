import CompostionOverrides from './CompostionOverrides';

import React from 'react';

import js from '!!raw!./CompostionOverrides.js';
import css from '!!raw!./CompostionOverrides.css';
import layoutCss from '!!raw!shared/styles/layout.css';
import typographyCss from '!!raw!shared/styles/typography.css';
import Snippet from 'shared/Snippet/Snippet';

export default class CompostionOverridesDemo extends React.Component {

  render() {
    const files = [
      { name: 'CompostionOverrides.js', source: js },
      { name: 'CompostionOverrides.css', source: css },
      { name: 'shared/styles/layout.css', source: layoutCss },
      { name: 'shared/styles/typography.css', source: typographyCss }
    ];

    return(
      <Snippet files={files}>
        <CompostionOverrides />
      </Snippet>
    );

  }

};
