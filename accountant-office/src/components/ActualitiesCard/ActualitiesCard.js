import React from 'react';

export default function ActualitiesCard({ actualitiesObj }) {
  const key = actualitiesObj[0];
  console.log(actualitiesObj);
  return (
    <div className='actualities-card' key={`actualitiesCard/${key}`}>
      <h1>{actualitiesObj[1]?.header}</h1>
      <div className='actualities-image-container'>
        <img src={actualitiesObj[1]?.imageUrl}></img>
      </div>
      <span>{actualitiesObj[1]?.content}</span>
      {actualitiesObj[1].content2 && <span>{actualitiesObj[1]?.content2}</span>}
      {actualitiesObj[1].content3 && <span>{actualitiesObj[1]?.content3}</span>}
      {actualitiesObj[1].content4 && <span>{actualitiesObj[1]?.content4}</span>}
    </div>
  );
}
