import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../config/firebase';
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
    console.log(data);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, data.email, data.password)
      .then((authCredential) => {
        navigateTo('/actualitiesForm');
      })
      .catch((e) => {
        console.log(e);
      });
  };
  return (
    <div>
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
    </div>
  );
}
