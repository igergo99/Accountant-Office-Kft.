import React, { useState, useEffect } from 'react';

import { useNavigate } from 'react-router-dom';
import { auth, storage } from '../config/firebase';
import { createNewData, readData } from '../services/crud';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import './ActualitiesForm.css';
import { signOut } from '@firebase/auth';
import {
  faFileCirclePlus,
  faFilePen,
  faAngleLeft,
  faAngleRight,
  faAnglesLeft,
  faAnglesRight,
  faCircleLeft,
} from '@fortawesome/free-solid-svg-icons';
import ActualitiesCard from '../components/ActualitiesCard/ActualitiesCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import EditForm from '../components/EditForm/EditForm';

export default function ActualititesFormView({
  isLogged,
  perPage,
  toDefault,
  setToDefault,
  setIsLogged,
}) {
  const navigateTo = useNavigate();

  const itemsPerPage = perPage;

  const [currentPage, setCurrentPage] = useState(1);
  const [fromIndex, setfromIndex] = useState(0);
  const [toIndex, setToIndex] = useState(itemsPerPage);
  const [dataArray, setDataArray] = useState([]);
  const totalItems = dataArray.length;
  const pageNumber = Math.ceil(totalItems / itemsPerPage);
  const [itemsToRender, setItemsToRender] = useState([]);
  const [formChoser, setFormChoser] = useState(null);
  const [actualitiesData, setActualitiesData] = useState({});
  const [inputArea2, setInputArea2] = useState(null);
  const [inputArea3, setInputArea3] = useState(null);
  const [inputArea4, setInputArea4] = useState(null);
  const [headerInput2, setHeaderInput2] = useState(null);
  const [headerInput3, setHeaderInput3] = useState(null);
  const [headerInput4, setHeaderInput4] = useState(null);
  const [maxInputMessage, setMaxInputMessage] = useState(null);
  const [endpointKey, setEndpointKey] = useState(null);
  const [editWindowOpen, setEditWindowOpen] = useState(null);
  const [formChoserOpen, setFormChoserOpen] = useState(true);

  const [uploadButtonDisabled, setUpldoadButtonDisabled] = useState(true);
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
    console.log('to Kurva anyád page');
  };

  const toLastPageHandler = () => {
    setCurrentPage(pageNumber);
    setfromIndex(totalItems - (totalItems % itemsPerPage));
    setToIndex(totalItems);

    setItemsToRender(dataArray.reverse().slice(fromIndex, toIndex));
  };

  useEffect(() => {
    setItemsToRender(dataArray.reverse().slice(fromIndex, toIndex));
    setToDefault(false);
  }, [dataArray, fromIndex, toIndex, setToDefault]);

  const changeHandler = (e) => {
    if (actualitiesData?.header && actualitiesData?.content) {
      setUpldoadButtonDisabled(false);
    }
    setActualitiesData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    console.log(actualitiesData);
  };

  const photoChangeHandler = (e) => {
    setUpldoadButtonDisabled(true);
    setActualitiesData({ ...actualitiesData, [e.target.name]: e.target.files[0] });
    console.log(actualitiesData);
  };

  const imageUploader = (e) => {
    const fileRef = ref(storage, `actualities/${actualitiesData?.image.name}`);
    uploadBytes(fileRef, actualitiesData?.image)
      .then((uploadResult) => {
        getDownloadURL(uploadResult?.ref)
          .then((value) => {
            setActualitiesData((prev) => ({ ...prev, imageUrl: value }));
            setUpldoadButtonDisabled(false);
          })

          .catch((e) => console.log(e));
      })
      .catch((e) => console.log(e));
  };

  const plusClickHandler = (e) => {
    if (!inputArea2) {
      setHeaderInput2(
        React.createElement('input', {
          name: 'header2',
          onChange: changeHandler,
        })
      );
      setInputArea2(
        React.createElement('textarea', {
          name: `content2`,
          onChange: changeHandler,
        })
      );
    }
    if (inputArea2 && !inputArea3) {
      setInputArea3(
        React.createElement('textarea', {
          name: `content3`,
          onChange: changeHandler,
        })
      );
      setHeaderInput3(
        React.createElement('input', {
          name: 'header3',
          onChange: changeHandler,
        })
      );
    }
    if (inputArea3 && !inputArea4) {
      setInputArea4(
        React.createElement('textarea', {
          name: `content4`,
          onChange: changeHandler,
        })
      );
      setHeaderInput4(
        React.createElement('input', {
          name: 'header4',
          onChange: changeHandler,
        })
      );
    }
    if (inputArea4) {
      setMaxInputMessage(
        React.createElement(
          'h1',
          { className: 'max-input-message' },
          'Elérted a maximális inputmező számot!'
        )
      );
      setTimeout(() => {
        setMaxInputMessage(null);
      }, 4000);
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (auth && !uploadButtonDisabled) {
      createNewData('ActualitiesDataBase', actualitiesData).then(() => {
        if (actualitiesData !== {}) {
          navigateTo('/');
        }
      });
    } else {
      console.log('nem sikerült a feltöltés');
    }
  };
  const backButtonHandler = (e) => {
    setFormChoser(0);
    setFormChoserOpen(true);
  };
  const formChoseClickHandler1 = (e) => {
    setFormChoser(1);
    setFormChoserOpen(false);
  };
  const formChoseClickHandler2 = (e) => {
    setFormChoser(2);
    setFormChoserOpen(false);
  };
  const editButtonHandler = (e) => {
    setEndpointKey(e.target.name);
    setEditWindowOpen(true);
  };

  const signOutClickHandler = (e) => {
    e.preventDefault();
    signOut(auth)
      .then((authCredential) => {
        setIsLogged(false);
        navigateTo('/');
      })
      .then(() => {
        console.log(auth.currentUser);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  if (isLogged) {
    return (
      <>
        {formChoserOpen && (
          <div className='choose-form-container'>
            <div className='choose-form-header'>
              <h1>Válassz az alábbi két opció közül:</h1>
            </div>
            <div className='new-article-center'>
              <div className='new-article-container' onClick={formChoseClickHandler1}>
                <FontAwesomeIcon name='1' icon={faFileCirclePlus} />
                <h1>Új cikk létrehozása</h1>
              </div>
            </div>
            <div className='article-editer-center'>
              <div className='article-editer-container' onClick={formChoseClickHandler2}>
                <FontAwesomeIcon name='2' icon={faFilePen} />
                <h1>Meglévő cikk szerkesztése</h1>
              </div>
            </div>
          </div>
        )}

        {formChoser === 1 && (
          <div className='new-actualities-container'>
            <div className='back-button'>
              <FontAwesomeIcon onClick={backButtonHandler} icon={faCircleLeft} />
            </div>
            <div>
              <form className='actualities-form-container' onSubmit={submitHandler}>
                <label htmlFor='headerInput'>Cím: </label>
                <input onChange={changeHandler} name='header' id='headerInput' />
                <label htmlFor='imageInput'>Kép: </label>
                <input
                  type='file'
                  onChange={photoChangeHandler}
                  name='image'
                  id='imageInput'
                />
                <div className='form-button-container'>
                  <button type='button' onClick={imageUploader}>
                    Kép feltöltése
                  </button>
                </div>
                <label htmlFor='contentInput'>Bevezetés: </label>
                <textarea onChange={changeHandler} name='content' id='contentInput' />
                {headerInput2 ? <label>Első bekezdés címe: </label> : null}
                {headerInput2 ? headerInput2 : null}
                {inputArea2 ? <label>Első bekezdés szövege: </label> : null}
                {inputArea2 ? inputArea2 : null}
                {headerInput3 ? <label>Második bekezdés címe: </label> : null}
                {headerInput3 ? headerInput3 : null}
                {inputArea3 ? <label>Második bekezdés szövege: </label> : null}
                {inputArea3 ? inputArea3 : null}
                {headerInput4 ? <label>Harmadik bekezdés címe: </label> : null}
                {headerInput4 ? headerInput4 : null}
                {inputArea4 ? <label>Harmadik bekezdés szövege: </label> : null}
                {inputArea4 ? inputArea4 : null}

                {maxInputMessage ? maxInputMessage : null}
                <div className='form-button-container'>
                  <button onClick={plusClickHandler} type='button'>
                    +
                  </button>
                </div>
                <div className='form-button-container'>
                  <button disabled={uploadButtonDisabled ? 'disabled' : ''} type='submit'>
                    Feltöltés
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
        {formChoser === 2 && (
          <div className='actualities-edit-container'>
            <div className='back-button'>
              <FontAwesomeIcon onClick={backButtonHandler} icon={faCircleLeft} />
            </div>
            <div className='actualities-card-container'>
              {itemsToRender.map((actualitiesObj, index) => {
                return (
                  <>
                    <ActualitiesCard actualitiesObj={actualitiesObj} key={index} />
                    <button onClick={editButtonHandler} name={actualitiesObj[0]}>
                      Szerkesztés
                    </button>
                  </>
                );
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
          </div>
        )}
        {editWindowOpen && <EditForm endpointKey={endpointKey} isLogged={isLogged} />}
        <div className='sign-out-button-container'>
          <button type='button' onClick={signOutClickHandler}>
            Sign out!
          </button>
        </div>
      </>
    );
  } else {
    return (
      <div>
        <h1>
          HAHAHAHA! Megpróbáltad feltörni a könyvelő oldalát. Ez nem jött össze, rendőrség
          értesítve. Pá!
        </h1>
      </div>
    );
  }
}
