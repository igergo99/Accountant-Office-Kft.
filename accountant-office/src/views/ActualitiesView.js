import React, { useEffect, useState } from 'react';
import { readData } from '../services/crud';

export default function ActualitiesView() {
  const [keyArray, setKeyArray] = useState([]);
  const [valueArray, setValueArray] = useState([]);

  useEffect(() => {
    const actualitiesDb = readData('ActualitiesDataBase')
      .then((DataSnapshot) => {
        const rawData = DataSnapshot.toJSON();
        setKeyArray(Object.keys(rawData));
        setValueArray(Object.values(rawData));
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  return <div>ActualitiesView</div>;
}
