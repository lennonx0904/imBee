import React from 'react';
import cx from 'classnames';

import './style.scss';

function Tag({ name, onClick, currentTag }) {
  const isCurrentTag = currentTag === name;

  return (
    <div className={cx('tag', [{ 'current-tag': isCurrentTag }])} key={name} onClick={onClick}>
      {name}
    </div>
  );
}

export default Tag;
