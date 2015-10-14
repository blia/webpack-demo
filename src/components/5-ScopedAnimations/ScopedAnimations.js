import styles from './ScopedAnimations.css';

import React, { Component } from 'react';

import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

export default class ScopedAnimations extends Component {

  render() {
    return (
      <div className={cx('root')}>
        <div className={cx('ball')} />
      </div>
    );
  }

};
