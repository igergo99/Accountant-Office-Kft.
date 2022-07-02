import React from 'react';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import './Header.css';
export default function Header() {
  const [dropDownOpen, setDropDownOpen] = useState(false);

  return (
    <div className='header-container'>
      <ul>
        <li>
          <NavLink to='/'>Rólunk</NavLink>
        </li>
        <div>
          <li
            onMouseEnter={(event) => {
              setDropDownOpen(true);
            }}
            onMouseLeave={(event) => {
              setDropDownOpen(false);
            }}
          >
            <span className='services'>Szolgáltatások</span>
          </li>
          {dropDownOpen && (
            <div
              className='header-dropdown'
              onMouseEnter={(event) => {
                setDropDownOpen(true);
              }}
              onMouseLeave={(event) => {
                setDropDownOpen(false);
              }}
            >
              <ul>
                <li>
                  <NavLink to='/services/accounting'>Könyvelés</NavLink>
                </li>
                <li>
                  <NavLink to='/services/tax'>Adótanácsadás</NavLink>
                </li>
                <li>
                  <NavLink to='/services/salary'>Bérszámfejtés</NavLink>
                </li>
              </ul>
            </div>
          )}
        </div>
        <li>
          <NavLink to='/actualities'>Aktualitások</NavLink>
        </li>
        <li>
          <NavLink to='/references'>Referenciák</NavLink>
        </li>
        <li>
          <NavLink to='/contact'>Elérhetőség</NavLink>
        </li>
      </ul>
    </div>
  );
}
