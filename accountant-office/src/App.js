import './App.css';
import { Routes, Route } from 'react-router-dom';
import HomePageView from './views/HomePageView';
import ScrollToTop from './others/ScrollToTop';
import HomePageLayout from './layouts/HomePageLayout';
function App() {
  return (
    <div className='App'>
      <Routes>
        <Route element={<HomePageLayout />}>
          <Route path='/' element={<HomePageView />} />
          <Route path='/aboutus' element={<HomePageView />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
