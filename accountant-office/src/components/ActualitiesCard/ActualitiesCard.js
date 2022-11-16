import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareXmark } from '@fortawesome/free-solid-svg-icons';

export default function ActualitiesCard({ actualitiesObj }) {
  const key = actualitiesObj[0];
  const [articleOpen, setArticleOpen] = useState(false);
  const cardClickHandler = (e) => {
    setArticleOpen(true);
  };
  const articleCloser = (e) => {
    setArticleOpen(false);
  };
  return (
    <div>
      <div
        className={articleOpen ? 'article-open-container' : 'article-closed-container'}
      >
        <button onClick={articleCloser}>
          <FontAwesomeIcon id='x-icon' icon={faSquareXmark} />
        </button>
        <div className='article-image-container'>
          <img
            src={
              actualitiesObj[1].imageUrl
                ? actualitiesObj[1]?.imageUrl
                : 'https://firebasestorage.googleapis.com/v0/b/accountant-office.appspot.com/o/actualities%2Fcalculator.jpg?alt=media&token=ebc319b2-dc41-4f44-b4c3-36827a06fe35'
            }
          ></img>
        </div>
        <div className='article-content-container'>
          <h1 className='article-header'>{actualitiesObj[1]?.header}</h1>
          <span className='article-preface'>{actualitiesObj[1]?.content}</span>
          <h2 className='article-paragraph-header'>{actualitiesObj[1]?.header2}</h2>
          <span className='article-preface'>{actualitiesObj[1]?.content2}</span>
          <h2 className='article-paragraph-header'>{actualitiesObj[1]?.header3}</h2>
          <span className='article-preface'>{actualitiesObj[1]?.content3}</span>
          <h2 className='article-paragraph-header'>{actualitiesObj[1]?.header4}</h2>
          <span className='article-preface'>{actualitiesObj[1]?.content4}</span>
        </div>
      </div>
      <div
        onClick={cardClickHandler}
        className='actualities-card'
        key={`actualitiesCard/${key}`}
      >
        <div className='actualities-image-container'>
          <img
            src={
              actualitiesObj[1].imageUrl
                ? actualitiesObj[1]?.imageUrl
                : 'https://firebasestorage.googleapis.com/v0/b/accountant-office.appspot.com/o/actualities%2Fcalculator-385506.jpg?alt=media&token=ebc319b2-dc41-4f44-b4c3-36827a06fe35'
            }
          ></img>
        </div>
        <h1>{actualitiesObj[1]?.header}</h1>

        <span>
          {actualitiesObj[1]?.content.length > 170
            ? actualitiesObj[1]?.content.slice(0, 170) + ' ... '
            : actualitiesObj[1]?.content}
        </span>
      </div>
    </div>
  );
}
