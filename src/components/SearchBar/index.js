import React from 'react';

import './style.scss';

function SearchBar({ text, onChange }) {
  return (
    <div className="search-wrapper">
      <input className="search-input" onChange={(e) => onChange(e.target.value)} value={text} />
      <span className="search-btn" onClick={() => {}}>
        Search
      </span>
    </div>
  );
}

export default SearchBar;
