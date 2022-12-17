/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { SearchBar, Tag, Question } from 'components';
import {
  fetchTagsRequest as fetchTags,
  fetchQuestionsRequest as fetchQuestions
} from 'store/actions';
import './style.scss';

function HomePage() {
  const tags = useSelector((state) => state.tags);
  const questions = useSelector((state) => state.questions);

  const dispatch = useDispatch();

  const [currentTag, setCurrentTag] = useState('');

  useEffect(() => {
    dispatch(fetchTags());
  }, []);

  useEffect(() => {
    if (tags && tags.length > 0 && !currentTag) {
      const firstTag = tags[0].name;
      setCurrentTag(firstTag);
    }
  }, [tags]);

  useEffect(() => {
    currentTag && dispatch(fetchQuestions(currentTag));
  }, [currentTag]);

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
