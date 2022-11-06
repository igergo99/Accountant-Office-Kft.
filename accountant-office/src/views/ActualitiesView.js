import React, { useEffect, useState } from 'react';
import ActualitiesCard from '../components/ActualitiesCard/ActualitiesCard';
import { readData } from '../services/crud';

export default function ActualitiesView() {
  const [dataArray, setDataArray] = useState([]);

  useEffect(() => {
    const actualitiesDb = readData('ActualitiesDataBase')
      .then((DataSnapshot) => {
        const rawData = DataSnapshot.toJSON();
        setDataArray(Object.entries(rawData));
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);
  console.log(dataArray);
  return (
    <div className='actualities-card-container'>
      {dataArray.map((actualitiesObj, index) => {
        return <ActualitiesCard actualitiesObj={actualitiesObj} key={index} />;
      })}
    </div>
  );
}
