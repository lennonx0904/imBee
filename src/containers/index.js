import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import SearchBar from 'components/SearchBar';
import { fetchTagsRequest as fetchTags } from 'store/actions';

function HomePage() {
  const tags = useSelector((state) => state.tags);
  const dispatch = useDispatch();

  console.log('@tags', tags);

  useEffect(() => {
    dispatch(fetchTags());
  }, []);

  return (
    <div>
      <SearchBar />
    </div>
  );
}

export default HomePage;
