import styles from './StyleVariantB.css';

import React, { Component } from 'react';


import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

export default class StyleVariantB extends Component {

  render() {
    return (
      <div className={cx('root')}>
        <p className={cx('text')}>Style Variant B</p>
      </div>
    );
  }

};
