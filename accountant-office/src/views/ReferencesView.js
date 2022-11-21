import React, { useEffect, useState } from 'react';
import './References.css';
export default function ReferencesView() {
  const [referenceChoser, setReferenceChoser] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setReferenceChoser(!referenceChoser);
    }, 8000);
  }, [referenceChoser]);
  return (
    <>
      <div className='references-container'>
        <div className={'active-reference-1'}>
          <span>
            "The art of war teaches us to rely not on the likelihood of the enemy's not
            coming, but on our own readiness to receive him; not on the chance of his not
            attacking, but rather on the fact that we have made our position
            unassailable."
          </span>
          <div className='company-name-container'>
            <span>-Sun Tzu-</span>
          </div>
        </div>
        <div className={'active-reference-2'}>
          <span>
            "The art of war teaches us to rely not on the likelihood of the enemy's not
            coming, but on our own readiness to receive him; not on the chance of his not
            attacking, but rather on the fact that we have made our position
            unassailable."
          </span>
          <div className='company-name-container'>
            <span>-Sun Tzu-</span>
          </div>
        </div>
        <div className={'active-reference-3'}>
          <span>
            "The art of war teaches us to rely not on the likelihood of the enemy's not
            coming, but on our own readiness to receive him; not on the chance of his not
            attacking, but rather on the fact that we have made our position
            unassailable."
          </span>
          <div className='company-name-container'>
            <span>-Sun Tzu-</span>
          </div>
        </div>
        <div className={'active-reference-4'}>
          <span>
            "The art of war teaches us to rely not on the likelihood of the enemy's not
            coming, but on our own readiness to receive him; not on the chance of his not
            attacking, but rather on the fact that we have made our position
            unassailable."
          </span>
          <div className='company-name-container'>
            <span>-Sun Tzu-</span>
          </div>
        </div>
        <div className={'active-reference-5'}>
          <span>
            "The art of war teaches us to rely not on the likelihood of the enemy's not
            coming, but on our own readiness to receive him; not on the chance of his not
            attacking, but rather on the fact that we have made our position
            unassailable."
          </span>
          <div className='company-name-container'>
            <span>-Sun Tzu-</span>
          </div>
        </div>
      </div>
      <img className='homepage-image-container' src='church-1993645.jpg' />
    </>
  );
}
