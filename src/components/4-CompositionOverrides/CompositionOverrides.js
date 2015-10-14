import styles from './CompositionOverrides.css';

import React, { Component } from 'react';

import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

export default class CompositionOverrides extends Component {

  render() {
    return (
      <div className={cx('root')}>
        <p className={cx('text')}>Class Composition with Overrides</p>
      </div>
    );
  }

};
