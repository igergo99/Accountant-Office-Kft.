import React, { useState } from 'react';
import { auth } from '../config/firebase';
import { createNewData } from '../services/crud';

export default function ActualititesFormView() {
  const [actualitiesData, setActualitiesData] = useState({});
  const changeHandler = (e) => {
    setActualitiesData({ ...actualitiesData, [e.target.name]: e.target.value });
    console.log(actualitiesData);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    if (auth) {
      createNewData('Actualities', actualitiesData);
    } else {
      console.log('nem sikerült a feltöltés');
    }
  };
  return (
    <div>
      <form onSubmit={submitHandler}>
        <label htmlFor='headerInput'>Cím: </label>
        <input onChange={changeHandler} name='header' id='headerInput' />
        <label htmlFor='imageInput'>Kép: </label>
        <input onChange={changeHandler} name='image' id='imageInput' />
        <label htmlFor='contentInput'>Szöveg: </label>
        <input onChange={changeHandler} name='content' id='contentInput' />
        <button type='submit'>Feltöltés</button>
      </form>
    </div>
  );
}
