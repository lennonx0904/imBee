import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { SearchBar, Tag } from 'components';
import { fetchTagsRequest as fetchTags } from 'store/actions';

import './style.scss';

function HomePage() {
  const tags = useSelector((state) => state.tags);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTags());
  }, []);

  return (
    <div>
      <SearchBar />
      <div className="tag-list">
        <div>Trending</div>
        {tags.map(({ name }) => (
          <Tag name={name} />
        ))}
      </div>
    </div>
  );
}

export default HomePage;
