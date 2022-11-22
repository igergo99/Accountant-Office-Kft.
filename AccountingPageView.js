import React from 'react';
import './Services.css';

import { NavLink } from 'react-router-dom';

export default function AccountingPageView({ setOfferButtonOn, switchChecked }) {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth',
  });
  return (
    <>
      <div className='accounting-container'>
        <div className={switchChecked ? 'accounting-box-bright' : 'accounting-box-dark'}>
          <h1>Könyvelés</h1>
          <span>
            Lórum ipse egy gyönyökő retlőség a túl kevés és a túl sok között. Rond tányos
            fásos pornímágot fekülő, a fekülő által közvetlenül fátlan ködésök ángása után
            ciánghat. Ehhez fekülőnek természetesen csilnie kell az égszerítő kulldort is.
            Rond rond a kölyökök és pornímágok a fita nem viszmoskodják. Az égszerítő
            vostához való üléshöz, ámor magmuskájában, vagy mokánán bódik egy ságó
            kegyeletést.
          </span>
          <div className='button-container'>
            <NavLink to='/'>
              <button onClick={setOfferButtonOn}>Árajánlat</button>
            </NavLink>
          </div>
        </div>
        <div className={switchChecked ? 'tax-box-bright' : 'tax-box-dark'}>
          <h1>Adótanácsadás</h1>
          <span>
            Lórum ipse egy gyönyökő retlőség a túl kevés és a túl sok között. Rond tányos
            fásos pornímágot fekülő, a fekülő által közvetlenül fátlan ködésök ángása után
            ciánghat. Ehhez fekülőnek természetesen csilnie kell az égszerítő kulldort is.
            Rond rond a kölyökök és pornímágok a fita nem viszmoskodják. Az égszerítő
            vostához való üléshöz, ámor magmuskájában, vagy mokánán bódik egy ságó
            kegyeletést.
          </span>
          <div className='button-container'>
            <NavLink to='/'>
              <button onClick={setOfferButtonOn}>Árajánlat</button>
            </NavLink>
          </div>
        </div>
        <div className={switchChecked ? 'salary-box-bright' : 'salary-box-dark'}>
          <h1>Bérszámfejtés</h1>
          <span>
            Lórum ipse egy gyönyökő retlőség a túl kevés és a túl sok között. Rond tányos
            fásos pornímágot fekülő, a fekülő által közvetlenül fátlan ködésök ángása után
            ciánghat. Ehhez fekülőnek természetesen csilnie kell az égszerítő kulldort is.
            Rond rond a kölyökök és pornímágok a fita nem viszmoskodják. Az égszerítő
            vostához való üléshöz, ámor magmuskájában, vagy mokánán bódik egy ságó
            kegyeletést.
          </span>
          <div className='button-container'>
            <NavLink to='/'>
              <button onClick={setOfferButtonOn}>Árajánlat</button>
            </NavLink>
          </div>
        </div>
        <div
          className={
            switchChecked ? 'annual-report-box-bright' : 'annual-report-box-dark'
          }
        >
          <h1>Éves beszámoló</h1>
          <span>
            Lórum ipse egy gyönyökő retlőség a túl kevés és a túl sok között. Rond tányos
            fásos pornímágot fekülő, a fekülő által közvetlenül fátlan ködésök ángása után
            ciánghat. Ehhez fekülőnek természetesen csilnie kell az égszerítő kulldort is.
            Rond rond a kölyökök és pornímágok a fita nem viszmoskodják. Az égszerítő
            vostához való üléshöz, ámor magmuskájában, vagy mokánán bódik egy ságó
            kegyeletést.
          </span>
          <div className='button-container'>
            <NavLink to='/'>
              <button onClick={setOfferButtonOn}>Árajánlat</button>
            </NavLink>
          </div>
        </div>
        <div
          className={
            switchChecked ? 'web-developement-box-bright' : 'web-developement-box-dark'
          }
        >
          <h1>Web-fejlesztés</h1>
          <span>
            Cégünk egyedi web-oldal készítéssel is foglalkozik. A legkorszerűbb
            technológiákat és program nyelveket alkalmazva, úgy mint: JavaScript, React,
            HTML, CSS, JIRA, Git, Firebase stb. A legfejlettebb techonlógiai stack-et
            alkalmazva lehetőségünk van full-respopnsive, igényes megjelenésű
            web-oldalakat készíteni. Az oldalakat igény esetén egyedi funkciókkal is
            felvértezzük, mely így vállalati környezetben is képes megállni a helyét. Ha
            kérdése, van keressen meg Minket, vagy kérjen árajánlatot!
          </span>
          <div className='button-container'>
            <NavLink to='/'>
              <button onClick={setOfferButtonOn}>Árajánlat</button>
            </NavLink>
          </div>
        </div>
      </div>
      <img
        className='homepage-image-container'
        src={switchChecked ? 'july-pass-3042793.jpg' : 'church-1993645.jpg'}
      />
    </>
  );
}
