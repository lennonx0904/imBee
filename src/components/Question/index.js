/* eslint-disable camelcase */
import React from 'react';
import cx from 'classnames';

import './style.scss';

function Question({ question }) {
  const {
    title, link, score, answer_count, is_answered, view_count, owner
  } = question;
  const { profile_image, display_name } = owner;

  return (
    <a className="question" href={link} target="_blank" rel="noreferrer">
      <div className="main">
        <div className="question-title">{title}</div>

        <div className="detail">
          <div className="detail-box">
            <div className="detail-title">Score</div>
            <div className={cx('detail-count', [{ 'score-below-zero': score < 0 }])}>{score}</div>
          </div>
          <div className="detail-box">
            <div className="detail-title">Answer</div>
            <div
              className={cx('detail-count', [
                {
                  'is-answered': answer_count && is_answered,
                  'has-answer-not-accepted': answer_count && !is_answered
                }
              ])}
            >
              {answer_count}
            </div>
          </div>
          <div className="detail-box">
            <div className="detail-title">Viewed</div>
            <div className="detail-count">{view_count}</div>
          </div>
        </div>
      </div>
      <div className="owner">
        <img src={profile_image} alt="profile_image" />
        <div className="owner-name">{display_name}</div>
      </div>
    </a>
  );
}

export default Question;
