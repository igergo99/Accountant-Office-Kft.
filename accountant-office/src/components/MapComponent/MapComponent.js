import { useState, useEffect, useRef } from 'react';
import React from 'react';
const MapComponent = ({ eventInfo }) => {
  const [map, setMap] = useState();
  const [marker, setMarker] = useState();
  const ref = useRef(null);

  useEffect(() => {
    if (ref.current && !map) {
      setMap(
        new window.google.maps.Map(ref.current, {
          mapId: 'f351ed5064543873',
        })
      );
    }

    if (map) {
      map.setOptions({
        zoom: 6.5,
        // center: { lat: eventInfo[1]?.geoLat, lng: eventInfo[1]?.geoLng },
        center: { lat: 47.162494, lng: 19.503304 },
        // disableDefaultUI: true,
        mapTypeControl: false,
        streetViewControl: false,
        // gestureHandling: "greedy",
      });
    }
    return (
      <>
        <div className='goole-maps-search-container' ref={ref}></div>
      </>
    );
  }, [ref, map]);
};

export default MapComponent;
