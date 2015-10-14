import styles from './PowerOfClassNames.css';

import React, { Component } from 'react';

import classNames from 'classnames/bind';

const classNamesBound = classNames.bind(styles);

export default class PowerOfClassNamesBound extends Component {
  render() {
    const loading = true //Some logic
    const selected = true //Some logic
    const rootClassName = classNamesBound('root')
    const globalClassNames = classNamesBound(
      'text',
      { loading } //es2015 Object Definition
    )
    const localClassNames = classNamesBound(
      'loc',
      { selected } //es2015 Object Definition
    )
    //
    return (
      <div className={ rootClassName }>
        <p className={ globalClassNames }>Global Selectors</p>
        <p className={ localClassNames }>Local Selectors</p>
      </div>
    );
  }

};
