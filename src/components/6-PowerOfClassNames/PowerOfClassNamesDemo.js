import PowerOfClassNames from './PowerOfClassNames';
import PowerOfClassNamesBound from './PowerOfClassNamesBound';

import React, { Component } from 'react';

import js from '!!raw!./PowerOfClassNames.js';
import jsBound from '!!raw!./PowerOfClassNamesBound.js';
import css from '!!raw!./PowerOfClassNames.css';
import Snippet from 'shared/Snippet/Snippet';

export default class PowerOfClassNamesDemo extends Component {

  render() {
    const files = [
      { name: 'PowerOfClassNames.js', source: js },
      { name: 'PowerOfClassNamesBound.js', source: jsBound },
      { name: 'PowerOfClassNames.css', source: css }
    ];

    return (
      <Snippet files={files}>
        <p>classNames</p>
        <PowerOfClassNames />
        <p>classNames/bind</p>
        <PowerOfClassNamesBound />
      </Snippet>
    );
  }

};
