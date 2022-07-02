import React from 'react';
import { NavLink } from 'react-router-dom';
import './Footer.css';
export default function Footer() {
  return (
    <div className='footer-container'>
      <ul>
        <li>
          <NavLink to='/impressum'>Impresszum</NavLink>
        </li>
        <li>
          <NavLink to='/contactus'>Kapcsolat</NavLink>
        </li>
      </ul>
    </div>
  );
}
