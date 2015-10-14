import styles from './PowerOfClassNames.css';

import React, { Component } from 'react';

import classNames from 'classnames';

export default class PowerOfClassNames extends Component {
  render() {
    const loading = true //Some logic
    const selected = true //Some logic
    const rootClassName = classNames(styles.root)
    const globalClassNames = classNames(
      'text',
      { loading } //es2015 Object Definition
    )
    const localClassNames = classNames(
      styles.loc,
      {
        [styles.selected]: selected //es2015 Object Definition
      }
    )
    return (
      <div className={ rootClassName }>
        <p className={ globalClassNames }>Global Selectors</p>
        <p className={ localClassNames }>Local Selectors</p>
      </div>
    );
  }

};
