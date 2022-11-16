import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import ContactUs from '../ContactUs/ContactUs';
import MapComponent from '../MapComponent/MapComponent';
import { Wrapper } from '@googlemaps/react-wrapper';
import { signOut } from '@firebase/auth';

import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserTie, faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { auth } from '../../config/firebase';
export default function Footer({ isLogged, setIsLogged }) {
  const signOutClickHandler = (e) => {
    e.preventDefault();
    signOut(auth)
      .then((authCredential) => {
        setIsLogged(false);
      })
      .catch((e) => {
        console.log(e);
      });
  };
  return (
    <>
      <div className='footer-container'>
        <div className='company-intro'>
          <h1>Accountant Office Kft.</h1>
          <span>
            Teljeskörű gazdasági szolgáltatások, bérszámfejtés, adótanácsadás, könyvelési
            problémák megoldása
          </span>
          <div className='footer-icon-container'>
            <NavLink to='/admin'>
              <FontAwesomeIcon
                icon={faUserTie}
                className={isLogged ? 'admin-icon-logged-in' : 'admin-icon-logged-out'}
              />
            </NavLink>
            <FontAwesomeIcon
              onClick={signOutClickHandler}
              icon={faArrowRightFromBracket}
            />
          </div>
        </div>
        <div className='contact-container'>
          <h1>Kapcsolat</h1>
          <span>Iglódi Zoltán</span>
          <span>ziglodi@gmail.com</span>
          <span>+36301012412</span>
          <h1>Cím</h1>
          <span>5435 Martfű,</span>
          <span>Gesztenye sor 1.</span>
        </div>
        <div className='usefull-links-container'>
          <h1>Hasznos linkek</h1>
          <a target='_blank' href='https://nav.gov.hu/'>
            Nemzeti Adó- és Vámhivatal
          </a>
          <a
            target='_blank'
            href='https://2010-2014.kormany.hu/hu/nemzetgazdasagi-miniszterium'
          >
            Nemzetgazdasági Minisztérium
          </a>
          <a target='_blank' href='https://www.magyarorszag.hu/'>
            Kormányzati portál
          </a>
          <a target='_blank' href='/'>
            Adatvédelmi tájékoztató
          </a>
        </div>
        <div className='map-container'>
          <Wrapper apiKey={'AIzaSyCHUoQzDGtL1W11uqhZirFpmo3Q_Z--6ik'}>
            <MapComponent />
          </Wrapper>
        </div>
      </div>
      <div className='copyright-container'>
        <span>Accountant Office Kft. © 2022 – Minden jog fenntartva</span>
        <span>Készítette: Iglódi Gergő, Accountant Office Kft.</span>
      </div>
    </>
  );
}
