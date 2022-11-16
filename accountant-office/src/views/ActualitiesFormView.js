import React, { useState } from 'react';
import { auth, storage } from '../config/firebase';
import { createNewData } from '../services/crud';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import './ActualitiesForm.css';
export default function ActualititesFormView() {
  const [actualitiesData, setActualitiesData] = useState({});
  const [inputArea2, setInputArea2] = useState(null);
  const [inputArea3, setInputArea3] = useState(null);
  const [inputArea4, setInputArea4] = useState(null);
  const [headerInput2, setHeaderInput2] = useState(null);
  const [headerInput3, setHeaderInput3] = useState(null);
  const [headerInput4, setHeaderInput4] = useState(null);
  const [maxInputMessage, setMaxInputMessage] = useState(null);

  const changeHandler = (e) => {
    setActualitiesData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    console.log(actualitiesData);
  };

  const photoChangeHandler = (e) => {
    setActualitiesData({ ...actualitiesData, [e.target.name]: e.target.files[0] });
  };

  const imageUploader = (e) => {
    const fileRef = ref(storage, `actualities/${actualitiesData?.image.name}`);
    uploadBytes(fileRef, actualitiesData?.image)
      .then((uploadResult) => {
        getDownloadURL(uploadResult?.ref)
          .then((value) => {
            setActualitiesData((prev) => ({ ...prev, imageUrl: value }));
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
          placeholder: 'Bekezdés:',
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
        React.createElement('h1', {}, 'Elérted a maximális inputmező számot!')
      );
      setTimeout(() => {
        setMaxInputMessage(null);
      }, 4000);
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (auth) {
      createNewData('ActualitiesDataBase', actualitiesData);
    } else {
      console.log('nem sikerült a feltöltés');
    }
  };

  if (auth.currentUser) {
    return (
      <div className='actualities-form-container'>
        <form onSubmit={submitHandler}>
          <label htmlFor='headerInput'>Cím: </label>
          <input onChange={changeHandler} name='header' id='headerInput' />
          <label htmlFor='imageInput'>Kép: </label>
          <input type='file' onChange={photoChangeHandler} name='image' id='imageInput' />
          <button type='button' onClick={imageUploader}>
            Kép feltöltése
          </button>
          <label htmlFor='contentInput'>Bevezetés: </label>
          <textarea onChange={changeHandler} name='content' id='contentInput' />
          {headerInput2 ? <label>Bekezdés címe: </label> : null}
          {headerInput2 ? headerInput2 : null}
          {inputArea2 ? <label>Bekezdés szövege: </label> : null}
          {inputArea2 ? inputArea2 : null}
          {headerInput3 ? <label>Bekezdés címe: </label> : null}
          {headerInput3 ? headerInput3 : null}
          {inputArea3 ? <label>Bekezdés szövege: </label> : null}
          {inputArea3 ? inputArea3 : null}
          {headerInput4 ? <label>Bekezdés címe: </label> : null}
          {headerInput4 ? headerInput4 : null}
          {inputArea4 ? <label>Bekezdés szövege: </label> : null}
          {inputArea4 ? inputArea4 : null}

          {maxInputMessage ? maxInputMessage : null}
          <button type='submit'>Feltöltés</button>
          <button onClick={plusClickHandler} type='button'>
            +
          </button>
        </form>
      </div>
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
