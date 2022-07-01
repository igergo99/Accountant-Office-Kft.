import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Outlet } from 'react-router';
export default function HomePageLayout() {
  return (
    <div>
      <Header />
      <div className='layout-inner-container'>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
