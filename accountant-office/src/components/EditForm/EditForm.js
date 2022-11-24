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
    console.log('plus hívás');
    if (!headerInput2) {
      console.log('plus hívás if1');
      setHeaderInput2(
        React.createElement('input', {
          defaultValue: 'Első bekezdés címe:',

          name: 'header2',
          onChange: changeHandler,
        })
      );
      setInputArea2(
        React.createElement('textarea', {
          defaultValue: 'Első bekezdés szövege:',

          name: `content2`,
          onChange: changeHandler,
        })
      );
    } else if (headerInput2 && !headerInput3) {
      console.log('plus hívás if2');
      setInputArea3(
        React.createElement('textarea', {
          defaultValue: 'Második bekezdés szövege:',
          name: `content3`,
          onChange: changeHandler,
        })
      );
      setHeaderInput3(
        React.createElement('input', {
          defaultValue: 'Harmadik bekezdés címe:',
          name: 'header3',
          onChange: changeHandler,
        })
      );
    } else if (headerInput3 && !headerInput4) {
      console.log('plus hívás if3');
      setInputArea4(
        React.createElement('textarea', {
          defaultValue: 'Harmadik bekezdés szövege:',
          name: `content4`,
          onChange: changeHandler,
        })
      );
      setHeaderInput4(
        React.createElement('input', {
          defaultValue: 'Harmadik bekezdés címe:',
          name: 'header4',
          onChange: changeHandler,
        })
      );
    } else {
      console.log('plus hívás else');
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
          <form className='actualities-form-container' onSubmit={submitHandler}>
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

            {actualitiesData.header2 ? <label>Bekezdés címe: </label> : headerInput2}

            {actualitiesData.content2 ? <label>Bekezdés szövege: </label> : inputArea2}

            {actualitiesData.header3 ? <label>Bekezdés címe: </label> : headerInput3}

            {actualitiesData.content3 ? <label>Bekezdés szövege: </label> : inputArea3}

            {actualitiesData.header4 ? <label>Bekezdés címe: </label> : headerInput4}

            {actualitiesData.content4 ? <label>Bekezdés szövege: </label> : inputArea4}

            {maxInputMessage ? maxInputMessage : null}
            <div className='form-button-container'>
              <button type='submit'>Feltöltés</button>
              <button onClick={plusClickHandler} type='button'>
                +
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
}
