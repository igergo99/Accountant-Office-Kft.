import React from 'react';
import { useState } from 'react';
import { createNewData } from '../../services/crud';
import emailjs from '@emailjs/browser';
export default function HomePageForm() {
  const [contactInfo, setContactInfo] = useState({
    forName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    taxNumber: '',
    city: '',
    messageType: '',
    message: '',
  });
  const [feedbackMessage, setFeedbackMessage] = useState(null);

  const contactChangeHandler = (e) => {
    setContactInfo({ ...contactInfo, [e.target.name]: e.target.value });
  };
  const contactSubmitHandeler = (e) => {
    e.preventDefault();

    if (
      contactInfo.forName &&
      contactInfo.email &&
      contactInfo.phone &&
      contactInfo.city &&
      contactInfo.company &&
      contactInfo.taxNumber &&
      contactInfo.lastName &&
      contactInfo.message &&
      contactInfo.messageType
    ) {
      createNewData('Offers', contactInfo)
        .then(() => {
          setFeedbackMessage('Köszönjük! Hamarosan felvesszük Önnel a kapcsolatot!');
          setTimeout(() => {
            setFeedbackMessage(null);
          }, 4000);
        })
        .then(() => {
          emailjs.send(
            'service_kj49bk7',
            'template_5x01cic',

            {
              message: `Név: ${contactInfo.forName} ${contactInfo.lastName}
               E-mail: ${contactInfo.email} 
               Tel.: ${contactInfo.phone} 
               Cégnév: ${contactInfo.company} 
               Adószám: ${contactInfo.taxNumber} 
               Város: ${contactInfo.city} 
               Árajánlat típusa: ${contactInfo.messageType} 
               Üzenet: ${contactInfo.message}`,
            },
            'RLj8LTEQzLT08K4XX'
          );
        })
        .then(() => {
          setContactInfo({
            forName: '',
            lastName: '',
            email: '',
            phone: '',
            company: '',
            taxNumber: '',
            city: '',
            messageType: '',
            message: '',
          });
        })
        .catch((e) => {
          console.log(e);
        });
    } else if (!contactInfo.messageType) {
      setFeedbackMessage('Kérjük válassza ki az üzenet típusát!');
      setTimeout(() => {
        setFeedbackMessage(null);
      }, 4000);
    } else if (!contactInfo.message) {
      setFeedbackMessage('Kérjük töltse ki az üzenet mezőt!');
      setTimeout(() => {
        setFeedbackMessage(null);
      }, 4000);
    } else {
      setFeedbackMessage('Kérjük minden adatot adjon meg!');
      setTimeout(() => {
        setFeedbackMessage(null);
      }, 4000);
    }
  };
  return (
    <div className='offer-form-container'>
      <div className='offer-form-header'>
        <h1>Árajánlat kérése</h1>
        <h1>{feedbackMessage}</h1>
      </div>
      <div className='offer-form'>
        <form onSubmit={contactSubmitHandeler}>
          <div>
            <input
              value={contactInfo.lastName}
              name='lastName'
              onChange={contactChangeHandler}
              placeholder='Vezetéknév'
            />
            <input
              value={contactInfo.forName}
              name='forName'
              onChange={contactChangeHandler}
              placeholder='Keresztnév'
            />
          </div>
          <div>
            <input
              value={contactInfo.email}
              name='email'
              onChange={contactChangeHandler}
              placeholder='E-mail'
            />
            <input
              value={contactInfo.phone}
              name='phone'
              onChange={contactChangeHandler}
              placeholder='Telefonszám'
            />
          </div>
          <div>
            <input
              value={contactInfo.company}
              name='company'
              onChange={contactChangeHandler}
              placeholder='Cégnév'
            />
            <input
              value={contactInfo.taxNumber}
              name='taxNumber'
              onChange={contactChangeHandler}
              placeholder='Adószám'
            />
          </div>
          <div>
            <input
              value={contactInfo.city}
              name='city'
              onChange={contactChangeHandler}
              placeholder='Város'
            />
            <label htmlFor='messageType'>Ajánlat típusa: </label>
            <select
              value={contactInfo.messageType}
              placeholder='Ajánlat típusa'
              name='messageType'
              onChange={contactChangeHandler}
            >
              <option>Cégalapítás</option>
              <option>Könyvelés</option>
              <option>Adóbevallás</option>
              <option>Üzleti tanácsadás</option>
            </select>
          </div>

          <textarea
            value={contactInfo.message}
            name='message'
            onChange={contactChangeHandler}
            placeholder='Üzenet'
          />
          <div>
            <button>Árajánlat kérés</button>
          </div>
        </form>
      </div>
    </div>
  );
}
