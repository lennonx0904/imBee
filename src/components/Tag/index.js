import React from 'react';

import './style.scss';

function Tag({ name }) {
  return (
    <div className="tag" key={name}>
      {name}
    </div>
  );
}

export default Tag;
