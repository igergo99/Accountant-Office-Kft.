import React from 'react';
import MapComponent from '../components/MapComponent/MapComponent';
import { Wrapper } from '@googlemaps/react-wrapper';
import { useState } from 'react';

const ContactView = () => {
  const [eventsCard, setEventsCard] = useState({});
  return (
    <>
      <Wrapper apiKey={'AIzaSyCHUoQzDGtL1W11uqhZirFpmo3Q_Z--6ik'}>
        <MapComponent />
      </Wrapper>
    </>
  );
};
export default ContactView;
