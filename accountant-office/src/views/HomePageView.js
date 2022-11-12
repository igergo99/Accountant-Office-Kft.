import React, { useEffect, useState } from 'react';
import './homePage.css';
import HomePageForm from '../components/HomePage/HomePageForm';
import {
  faSchoolFlag,
  faPepperHot,
  faPersonDigging,
  faScaleBalanced,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
export default function HomePageView() {
  const [movingBoxes, setMovingBoxes] = useState(null);
  useEffect(() => {
    setMovingBoxes(true);
  }, []);
  return (
    <div className='homepage-container'>
      <div className='welcome-container'>
        <h1 className={movingBoxes && 'welcome-head'}>
          Üdvözöljük az Accountant Office Kft. oldalán!
        </h1>
        <span className={movingBoxes && 'welcome-content'}>
          Bizalmas ügykezelés, több, mint 30 év tapasztalat, kis - közép és nagyvállalati
          környezetben is!
        </span>
        <div className='homepage-card-container'>
          <div className={movingBoxes && 'homepage-card1'}>
            <div className='homepage-article-even'>
              <h1>Adótanácsadás kis és középvállalkozásoknak</h1>
              <span>
                Lórum ipse egy gyönyökő retlőség a túl kevés és a túl sok között. Rond
                tányos fásos pornímágot fekülő, a fekülő által közvetlenül fátlan ködésök
                ángása után ciánghat. Ehhez fekülőnek természetesen csilnie kell az
                égszerítő kulldort is. Rond rond a kölyökök és pornímágok a fita nem
                viszmoskodják.
              </span>
            </div>
            <FontAwesomeIcon className='homepage-icons' icon={faSchoolFlag} />
          </div>
          <div className={movingBoxes && 'homepage-card2'}>
            <FontAwesomeIcon className='homepage-icons' icon={faPepperHot} />
            <div className='homepage-article-odd'>
              <h1>Bérszámfejtés, SZJA bevallás</h1>
              <span>
                Az égszerítő vostához való üléshöz, ámor magmuskájában, vagy mokánán bódik
                egy ságó kegyeletést. Kérem, a hetes jedezésre kattintva mezje ki a nyertő
                vozást.
              </span>
            </div>
          </div>
          <div className={movingBoxes && 'homepage-card3'}>
            <div className='homepage-article-even'>
              <h1>Gyakorlatias rendelkezésre állás, könyvelési problémáktól mentesen</h1>
              <span>
                Egy részletesen ezes óság allűrt csöztezhetik, amely a sóhajtól egészen a
                ködésök üdvölő prékájáig számcsol. Fekülő a tatott online jelenségen
                csábátos és potenciálisan igen tapos vostájának gondja lesz.
              </span>
            </div>
            <FontAwesomeIcon className='homepage-icons' icon={faPersonDigging} />
          </div>
          <div className={movingBoxes && 'homepage-card4'}>
            <FontAwesomeIcon className='homepage-icons' icon={faScaleBalanced} />
            <div className='homepage-article-odd'>
              <h1>Tudjuk, hogy nagy eséllyel segíthetünk</h1>
              <span>
                Elsősorban azt sedik a szerjesztő dajtélynak a nökétökkel forzós pacsaton
                pató pisztek, hogy a félett esztönbök vildás szapéinak legesízlénére bizgó
                szövezések nem koznak semmit, sőt úgy bogdajol, mintha az ágyém gömölőit
                pufoznák. Pedig a félett kömketlet részéről irtyás művényöt szapéval
                szerémezhetnék el a vildás szapéikban felő pisztek.
              </span>
            </div>
          </div>
        </div>
      </div>
      <HomePageForm />
      <img className='homepage-image-container' src='church-1993645.jpg' />
    </div>
  );
}
