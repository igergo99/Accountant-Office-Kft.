import React from 'react';
import MapComponent from '../components/MapComponent/MapComponent';
import { Wrapper } from '@googlemaps/react-wrapper';
import { useState } from 'react';
import ContactUs from '../components/ContactUs/ContactUs';

const ContactView = () => {
  const [eventsCard, setEventsCard] = useState({});
  return (
    <div className='card-container'>
      <div className='contact-form-container'>
        <ContactUs />
      </div>
      <div className='contact-container'>
        <h1>Ügyfélkapcsolat</h1>
        <span>Iglódi Zoltán</span>
        <span>ziglodi@gmail.com</span>
        <span>+36301012412</span>
        <h1>Cím</h1>
        <span>5435 Martfű,</span>
        <span>Gesztenye sor 1.</span>
      </div>
      <div className='map-container'>
        <Wrapper apiKey={'AIzaSyCHUoQzDGtL1W11uqhZirFpmo3Q_Z--6ik'}>
          <MapComponent />
        </Wrapper>
      </div>
    </div>
  );
};
export default ContactView;
