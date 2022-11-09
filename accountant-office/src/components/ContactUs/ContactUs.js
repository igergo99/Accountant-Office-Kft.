import React, { useState } from 'react';
import { createNewData } from '../../services/crud';

export default function ContactUs() {
  const [contactInfo, setContactInfo] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [feedbackMessage, setFeedbackMessage] = useState(null);

  const contactChangeHandler = (e) => {
    setContactInfo({ ...contactInfo, [e.target.name]: e.target.value });
  };
  const contactSubmitHandeler = (e) => {
    e.preventDefault();
    if (!contactInfo.name || !contactInfo.email || !contactInfo.phone) {
      setFeedbackMessage('Kérjük minden adatot adjon meg!');
      setTimeout(() => {
        setFeedbackMessage(null);
      }, 4000);
    }
    if (!contactInfo.message) {
      setFeedbackMessage('Kérjük töltse ki az üzenet mezőt!');
      setTimeout(() => {
        setFeedbackMessage(null);
      }, 4000);
    } else {
      createNewData('Messages', contactInfo)
        .then(() => {
          console.log('siker');
        })
        .catch((e) => {
          console.log(e);
        });
    }
  };
  return (
    <div>
      <form onSubmit={contactSubmitHandeler}>
        <h1>Név:</h1>
        <input onChange={contactChangeHandler} name='name'></input>
        <h1>E-mail:</h1>
        <input onChange={contactChangeHandler} name='email' type='email'></input>
        <h1>Telefonszám:</h1>
        <input onChange={contactChangeHandler} name='phone' type='tel'></input>
        <h1>Üzenet:</h1>
        <textarea onChange={contactChangeHandler} name='message'></textarea>
        {feedbackMessage && <h1>{feedbackMessage}</h1>}
        <button>Küldés</button>
      </form>
    </div>
  );
}
