import styles from './Logo.css';

import React, { Component } from 'react';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

export default class Logo extends Component {

  render() {
    return <div className={cx('logo')} />;
  }

};
