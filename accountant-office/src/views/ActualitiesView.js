import React, { useEffect, useState } from 'react';
import ActualitiesCard from '../components/ActualitiesCard/ActualitiesCard';
import { readData } from '../services/crud';
import './Actualities.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faAngleLeft,
  faAngleRight,
  faAnglesLeft,
  faAnglesRight,
} from '@fortawesome/free-solid-svg-icons';

export default function ActualitiesView({ perPage, toDefault, setToDefault }) {
  const itemsPerPage = perPage;
  const [currentPage, setCurrentPage] = useState(1);
  const [fromIndex, setfromIndex] = useState(0);
  const [toIndex, setToIndex] = useState(itemsPerPage);
  const [dataArray, setDataArray] = useState([]);
  const totalItems = dataArray.length;
  const pageNumber = Math.ceil(totalItems / itemsPerPage);
  const [itemsToRender, setItemsToRender] = useState([]);
  const [articleOpen, setArticleOpen] = useState(false);

  useEffect(() => {
    const actualitiesDb = readData('ActualitiesDataBase')
      .then((DataSnapshot) => {
        const rawData = DataSnapshot.toJSON();
        setDataArray(Object.entries(rawData));
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);
  useEffect(() => {
    if (toDefault) {
      setCurrentPage(1);
      setfromIndex(0);
      setToIndex(itemsPerPage);
    }
  }, [toDefault, itemsPerPage]);

  const nextButtonHandler = () => {
    setCurrentPage(currentPage + 1);
    setfromIndex(fromIndex + itemsPerPage);
    setToIndex(toIndex + itemsPerPage);

    setItemsToRender(dataArray.reverse().slice(fromIndex, toIndex));
    console.log('next page');
  };

  const previousButtonHandler = () => {
    setCurrentPage(currentPage - 1);
    setfromIndex(fromIndex - itemsPerPage);
    setToIndex(toIndex - itemsPerPage);

    setItemsToRender(dataArray.reverse().slice(fromIndex, toIndex));
    console.log('previous page');
  };

  const toFirstPageHandler = () => {
    setCurrentPage(1);
    setfromIndex(0);
    setToIndex(itemsPerPage);

    setItemsToRender(dataArray.reverse().slice(fromIndex, toIndex));
    console.log('to first page');
  };

  const toLastPageHandler = () => {
    setCurrentPage(pageNumber);
    setfromIndex(totalItems - itemsPerPage);
    setToIndex(totalItems);

    setItemsToRender(dataArray.reverse().slice(fromIndex, toIndex));
    console.log('to last page');
  };

  useEffect(() => {
    setItemsToRender(dataArray.reverse().slice(fromIndex, toIndex));
    setToDefault(false);
  }, [dataArray, fromIndex, toIndex, setToDefault]);

  return (
    <>
      <div className='actualities-header'>
        <h1>Legfrissebb híreink</h1>
      </div>
      <div className='actualities-card-container'>
        {itemsToRender.map((actualitiesObj, index) => {
          return <ActualitiesCard actualitiesObj={actualitiesObj} key={index} />;
        })}
      </div>
      <div className='article-container'></div>
      <div className='actualities-button-container'>
        <div>
          <button
            type='button'
            onClick={toFirstPageHandler}
            disabled={currentPage > 2 ? '' : 'disabled'}
          >
            <FontAwesomeIcon icon={faAnglesLeft} />
          </button>
          <button
            type='button'
            onClick={previousButtonHandler}
            disabled={currentPage === 1 ? 'disabled' : ''}
          >
            <FontAwesomeIcon icon={faAngleLeft} />
          </button>
          <span>{` Page ${currentPage} of ${pageNumber} `}</span>
          <button
            type='button'
            onClick={nextButtonHandler}
            disabled={currentPage === pageNumber ? 'disabled' : ''}
          >
            <FontAwesomeIcon icon={faAngleRight} />
          </button>
          <button
            type='button'
            onClick={toLastPageHandler}
            disabled={currentPage < pageNumber - 1 ? '' : 'disabled'}
          >
            <FontAwesomeIcon icon={faAnglesRight} />
          </button>
        </div>
      </div>
    </>
  );
}
