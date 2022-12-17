/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { SearchBar, Tag, Question } from 'components';
import { fetchTagsRequest as fetchTags } from 'store/actions';
import { tags, questions } from 'mockData';
import './style.scss';

function HomePage() {
  // const tags = useSelector((state) => state.tags);
  const dispatch = useDispatch();

  const [currentTag, setCurrentTag] = useState('');

  // useEffect(() => {
  //   dispatch(fetchTags());
  // }, []);

  useEffect(() => {
    if (tags && tags.length > 0 && !currentTag) {
      const firstTag = tags[0].name;
      setCurrentTag(firstTag);
    }
  }, [tags]);

  return (
    <div>
      <SearchBar />
      <div className="tag-list">
        <div>Trending</div>
        {tags.map(({ name }) => (
          <Tag key={name} name={name} onClick={() => setCurrentTag(name)} currentTag={currentTag} />
        ))}
      </div>
      <div className="question-list">
        {questions.map((item) => (<Question key={item.question_id} item={item} />))}
      </div>
    </div>
  );
}

export default HomePage;
