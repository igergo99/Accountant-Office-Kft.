import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { auth } from '../config/firebase';
import './Admin.css';
export default function AdminView() {
  const [data, setData] = useState({
    email: '',
    password: '',
  });
  const navigateTo = useNavigate();
  const changeHandler = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };
  const submitHandler = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, data.email, data.password)
      .then((authCredential) => {
        navigateTo('/actualitiesForm');
      })
      .then(setTimeout(signOut(auth), 86400000))
      .catch((e) => {
        console.log(e);
      });
  };
  const signOutClickHandler = (e) => {
    e.preventDefault();
    signOut(auth)
      .then((authCredential) => {
        navigateTo('/');
      })
      .catch((e) => {
        console.log(e);
      });
  };
  return (
    <div className='admin-form-container'>
      <form onSubmit={submitHandler}>
        <label>Email:</label>
        <input name='email' value={data.email} type='email' onChange={changeHandler} />
        <label>Password:</label>
        <input
          name='password'
          value={data.password}
          type='password'
          onChange={changeHandler}
        />
        <button type='submit'>Sign in!</button>
      </form>
      <button type='button' onClick={signOutClickHandler}>
        Sign out!
      </button>
    </div>
  );
}
