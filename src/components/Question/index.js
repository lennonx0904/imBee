/* eslint-disable camelcase */
import React from 'react';

import './style.scss';

function Question({
  item: {
    title, link, score, answer_count, view_count, owner
  }
}) {
  return (
    <a className="question" href={link} target="_blank" rel="noreferrer">
      <div className="main">
        <div className="question-title">{title}</div>

        <div className="detail">

          <div className="detail-box">
            <div className="detail-title">Score</div>
            <div className="detail-count">{score}</div>
          </div>

          <div className="detail-box">
            <div className="detail-title">Answer</div>
            <div className="detail-count">{answer_count}</div>
          </div>

          <div className="detail-box">
            <div className="detail-title">Viewed</div>
            <div className="detail-count">{view_count}</div>
          </div>

        </div>

      </div>

      <div className="owner">
        <img src={owner.profile_image} alt="profile_image" />
        <div className="owner-name">{owner.display_name}</div>
      </div>

    </a>
  );
}

export default Question;
