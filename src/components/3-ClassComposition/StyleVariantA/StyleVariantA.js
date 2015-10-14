import styles from './StyleVariantA.css';

import React, { Component } from 'react';

import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

export default class StyleVariantA extends Component {

  render() {
    return (
      <div className={cx('root')}>
        <p className={cx('text')}>Style Variant A</p>
      </div>
    );
  }

};
