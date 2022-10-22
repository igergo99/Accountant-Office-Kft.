import React from 'react';
import MapComponent from '../components/MapComponent/MapComponent';
import { Wrapper } from '@googlemaps/react-wrapper';
import { useState } from 'react';

const ContactView = () => {
  const [eventsCard, setEventsCard] = useState({});
  <Wrapper apiKey={'AIzaSyDfMN3btdZnnkpyEUYF-5pzVGkawsxFKFQ'}>
    <MapComponent eventInfo={eventsCard} />
  </Wrapper>;
  return <div>{MapComponent()}</div>;
};
export default ContactView;
