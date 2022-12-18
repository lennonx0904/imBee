/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useDebounce } from 'react-use';

import {
  SearchBar, Tag, Question, Spinner
} from 'components';
import {
  fetchTagsRequest as fetchTags,
  fetchQuestionsRequest as fetchQuestions,
  setQuestions
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
  const [searchText, setSearchText] = useState('');

  const fetchNextPage = () => {
    setPage(page + 1);
    dispatch(fetchQuestions({ tagged: searchText || currentTag, page: page + 1 }));
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
    currentTag && dispatch(fetchQuestions({ tagged: currentTag, page }));
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

  const onTagClick = (tag) => {
    setCurrentTag(tag);
    setPage(1);
    setSearchText('');
    dispatch(setQuestions([]));
  };

  useDebounce(() => {
    searchText && dispatch(fetchQuestions({ tagged: searchText, page: 1 }));
  },
  500,
  [searchText]);

  return (
    <div className="homepage-comtainer">
      <SearchBar text={searchText} onChange={setSearchText} />
      <div className="tag-list">
        <div>Trending</div>
        {tags.map(({ name }) => (
          <Tag key={name} name={name} onClick={() => onTagClick(name)} currentTag={currentTag} />
        ))}
      </div>
      <div className="question-list">
        {questions.map((question) => (
          <Question key={question.question_id} question={question} />
        ))}
        {isFetching && <Spinner />}
      </div>
    </div>
  );
}

export default HomePage;
