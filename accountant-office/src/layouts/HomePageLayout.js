import React, { useState } from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

import { Outlet } from 'react-router';
export default function HomePageLayout() {
  return (
    <div className='layout-container'>
      <Header />
      <div className='layout-inner-container'>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
