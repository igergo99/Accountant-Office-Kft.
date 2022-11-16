import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVihara } from '@fortawesome/free-solid-svg-icons';

export default function Header() {
  const [dropDownOpen, setDropDownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(null);

  useEffect(() => {
    const scrollHandler = () => {
      if (window.pageYOffset === 0) {
        setScrolled(null);
      }
      if (window.pageYOffset > 70) {
        setScrolled(true);
      }
    };
    window.addEventListener('scroll', scrollHandler);
  }, []);
  return (
    <div
      className={scrolled ? 'header-container-scrolled' : 'header-container-unscrolled'}
    >
      <ul className='header-logo-container'>
        <li>
          <NavLink to='/'>
            <FontAwesomeIcon className='header-logo' icon={faVihara} />
            <h1 className='header-name'>Accountant Office Kft.</h1>
          </NavLink>
        </li>
      </ul>
      <div className='header-link-container'>
        <div>
          <NavLink to='/aboutus'>Rólunk</NavLink>
        </div>
        <div>
          <div
            className='dropdown-trigger'
            onMouseEnter={(event) => {
              setDropDownOpen(true);
            }}
            onMouseLeave={(event) => {
              setDropDownOpen(false);
            }}
          >
            <span className='services'>Szolgáltatások</span>
          </div>
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
              <div className='dropdown-menu'>
                <div>
                  <NavLink to='/services/accounting'>Könyvelés</NavLink>
                </div>
                <div>
                  <NavLink to='/services/tax'>Adótanácsadás</NavLink>
                </div>
                <div>
                  <NavLink to='/services/salary'>Bérszámfejtés</NavLink>
                </div>
              </div>
            </div>
          )}
        </div>
        <div>
          <NavLink to='/actualities'>Aktualitások</NavLink>
        </div>
        <div>
          <NavLink to='/references'>Referenciák</NavLink>
        </div>
      </div>
    </div>
  );
}
