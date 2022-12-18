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
  const hasMoreQuestions = useSelector((state) => state.hasMoreQuestions);
  const isFetching = useSelector((state) => state.isFetching);

  const dispatch = useDispatch();

  const [currentTag, setCurrentTag] = useState('');
  const [page, setPage] = useState(0);
  const [scrollPosition, setScrollPosition] = useState(0);

  const fetchNextPage = () => {
    setPage(page + 1);
    dispatch(fetchQuestions({ currentTag, page: page + 1 }));
  };

  window.addEventListener('scroll', () => {
    setScrollPosition(window.pageYOffset);

    return () => window.removeEventListener('scroll', setScrollPosition(window.pageYOffset));
  });

  useEffect(() => {
    dispatch(fetchTags());
  }, []);

  useEffect(() => {
    if (tags && tags.length > 0 && !currentTag) {
      const firstTag = tags[0].name;
      setCurrentTag(firstTag);
      setPage(1);
    }
  }, [tags]);

  useEffect(() => {
    currentTag && dispatch(fetchQuestions({ currentTag, page }));
  }, [currentTag]);

  useEffect(() => {
    if (
      scrollPosition + window.screen.height >= document.body.scrollHeight
      && !isFetching
      && hasMoreQuestions
    ) {
      fetchNextPage();
    }
  }, [scrollPosition]);

  return (
    <div>
      <SearchBar />
      <div className="tag-list">
        <div>Trending</div>
        {tags.map(({ name }) => (
          <Tag
            key={name}
            name={name}
            onClick={() => { setCurrentTag(name); setPage(1); }}
            currentTag={currentTag}
          />
        ))}
      </div>
      <div className="question-list">
        {questions.map((question) => (
          <Question key={question.question_id} question={question} />
        ))}
        {isFetching && <h4>LOADING...</h4>}
      </div>
    </div>
  );
}

export default HomePage;
