import styles from './ScopedSelectors.css';

import React, { Component } from 'react';

import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

export default class ScopedSelectors extends Component {

  render() {
    return (
      <div className={ cx('root') }>
        <p className={ cx('text') }>Scoped Selectors</p>
      </div>
    );
  }

};
