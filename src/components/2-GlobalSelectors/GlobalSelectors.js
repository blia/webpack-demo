import styles from './GlobalSelectors.css';

import React, { Component } from 'react';

import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

export default class GlobalSelectors extends Component {
  // No difference between global and scoped selectors
  render() {
    return (
      <div className={ cx('root') }>
        <p className="text">Global Selectors</p>
        <p className={ cx('text') }>Global Selectors</p>
      </div>
    );
  }

};
