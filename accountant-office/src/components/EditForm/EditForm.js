import React, { useEffect, useState } from 'react';
import { readData } from '../../services/crud';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { storage, auth } from '../../config/firebase';
import { updateData } from '../../services/crud';
import { DataSnapshot, set } from '@firebase/database';

export default function EditForm({ endpointKey, isLogged }) {
  const [inputArea2, setInputArea2] = useState(null);
  const [inputArea3, setInputArea3] = useState(null);
  const [inputArea4, setInputArea4] = useState(null);
  const [headerInput2, setHeaderInput2] = useState(null);
  const [headerInput3, setHeaderInput3] = useState(null);
  const [headerInput4, setHeaderInput4] = useState(null);
  const [editObj, setEditObj] = useState(null);
  const [maxInputMessage, setMaxInputMessage] = useState(null);
  const [actualitiesData, setActualitiesData] = useState({ image: null });

  useEffect(() => {
    readData('ActualitiesDataBase', endpointKey)
      .then((DataSnapshot) => {
        setActualitiesData(DataSnapshot.toJSON());
      })

      .catch((e) => {
        console.log(e);
      });
  }, []);

  const changeHandler = (e) => {
    setActualitiesData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
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
    if (!actualitiesData?.header2) {
      setHeaderInput2(
        React.createElement('input', {
          value: actualitiesData?.header2,
          name: 'header2',
          onChange: changeHandler,
        })
      );
      setInputArea2(
        React.createElement('textarea', {
          value: actualitiesData?.content2,

          name: `content2`,
          onChange: changeHandler,
        })
      );
    }
    if (actualitiesData.header2 && !actualitiesData.header3) {
      setInputArea3(
        React.createElement('textarea', {
          value: actualitiesData?.content3,
          name: `content3`,
          onChange: changeHandler,
        })
      );
      setHeaderInput3(
        React.createElement('input', {
          value: actualitiesData?.header3,
          name: 'header3',
          onChange: changeHandler,
        })
      );
    }
    if (actualitiesData.header3 && !actualitiesData.header4) {
      setInputArea4(
        React.createElement('textarea', {
          value: actualitiesData?.content4,
          name: `content4`,
          onChange: changeHandler,
        })
      );
      setHeaderInput4(
        React.createElement('input', {
          value: actualitiesData?.header4,
          name: 'header4',
          onChange: changeHandler,
        })
      );
    }
    if (actualitiesData.header4) {
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
    if (auth.currentUser) {
      updateData(`ActualitiesDataBase`, endpointKey, actualitiesData)
        .then(() => {
          console.log(actualitiesData);
        })
        .catch((e) => {
          console.log(e);
        });
    } else {
      console.log('nem sikerült a feltöltés');
    }
  };
  return (
    <>
      {isLogged && (
        <div className='edit-form-container'>
          <form onSubmit={submitHandler}>
            <label htmlFor='headerInput'>Cím: </label>
            <input
              defaultValue={actualitiesData?.header}
              onChange={changeHandler}
              name='header'
              id='headerInput'
            />
            {/* <label htmlFor='imageInput'>Kép: </label>
        <input type='file' onChange={photoChangeHandler} name='image' id='imageInput' />
        <button type='button' onClick={imageUploader}>
          Kép feltöltése
        </button> */}
            <label htmlFor='contentInput'>Bevezetés: </label>
            <textarea
              defaultValue={actualitiesData?.content}
              onChange={changeHandler}
              name='content'
              id='contentInput'
            />
            {actualitiesData.header2 ? <label>Bekezdés címe: </label> : null}
            {actualitiesData.header2 ? (
              <input
                defaultValue={actualitiesData?.header2}
                onChange={changeHandler}
                name='header2'
                id='headerInput2'
              />
            ) : null}
            {actualitiesData.content2 ? <label>Bekezdés szövege: </label> : null}
            {actualitiesData.content2 ? (
              <textarea
                defaultValue={actualitiesData?.content2}
                onChange={changeHandler}
                name='content2'
                id='contentInput2'
              />
            ) : null}
            {actualitiesData.header3 ? <label>Bekezdés címe: </label> : null}
            {actualitiesData.header3 ? (
              <input
                defaultValue={actualitiesData?.header3}
                onChange={changeHandler}
                name='header3'
                id='headerInput3'
              />
            ) : null}
            {actualitiesData.content3 ? <label>Bekezdés szövege: </label> : null}
            {actualitiesData.content3 ? (
              <textarea
                defaultValue={actualitiesData?.content3}
                onChange={changeHandler}
                name='content3'
                id='contentInput3'
              />
            ) : null}
            {actualitiesData.header4 ? <label>Bekezdés címe: </label> : null}
            {actualitiesData.header4 ? (
              <input
                defaultValue={actualitiesData?.header4}
                onChange={changeHandler}
                name='header4'
                id='headerInput4'
              />
            ) : null}
            {actualitiesData.content4 ? <label>Bekezdés szövege: </label> : null}
            {actualitiesData.content4 ? (
              <textarea
                defaultValue={actualitiesData?.content4}
                onChange={changeHandler}
                name='content4'
                id='contentInput4'
              />
            ) : null}

            {maxInputMessage ? maxInputMessage : null}
            <button type='submit'>Feltöltés</button>
            <button onClick={plusClickHandler} type='button'>
              +
            </button>
          </form>
        </div>
      )}
    </>
  );
}
