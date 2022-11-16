import './App.css';
import { Routes, Route } from 'react-router-dom';
import HomePageView from './views/HomePageView';
import ActualitiesView from './views/ActualitiesView';
import ReferencesView from './views/ReferencesView';
import ImpressumView from './views/ImpressumView';
import ContactUsView from './views/ContactUsView';
import ContactView from './views/ContactView';
import ScrollToTop from './others/ScrollToTop';
import HomePageLayout from './layouts/HomePageLayout';
import AdminView from './views/AdminView';
import ActualitiesFormView from './views/ActualitiesFormView';
import AboutUsView from './views/AboutUsView';
import TaxPageView from './views/ServicesPages/TaxPageView';
import SalaryPageView from './views/ServicesPages/SalaryPageView';
import AccountingPageView from './views/ServicesPages/AccountingPageView';
import React from 'react';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route element={<HomePageLayout />}>
          <Route path='/' element={<HomePageView />} />
          <Route path='/aboutus' element={<AboutUsView />} />
          <Route path='/services/accounting' element={<AccountingPageView />} />
          <Route path='/services/tax' element={<TaxPageView />} />
          <Route path='/services/salary' element={<SalaryPageView />} />
          <Route
            path='/actualities'
            element={<ActualitiesView perPage={8} setToDefault={() => {}} />}
          />
          <Route path='/references' element={<ReferencesView />} />
          <Route path='/impressum' element={<ImpressumView />} />
          <Route path='/contactus' element={<ContactUsView />} />
          <Route path='/contact' element={<ContactView />} />
          <Route path='/admin' element={<AdminView />} />
          <Route path='/actualitiesForm' element={<ActualitiesFormView />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
