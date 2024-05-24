// src/routes/AppRouter.js
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {Navigator, NavigatorMobile} from '../component/nav'
import HomePage from '../pages/Home';
import PannelPage from '../pages/Pannel';
import Inqury from '../pages/Inqury'

const AppRouter = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <Router basename="/quicksurvey">
      {isMobile ? <NavigatorMobile /> : <Navigator />}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/pannel" element={<PannelPage />} />
        <Route path="/inqury" element={<Inqury />} />
        
      </Routes>
    </Router>
  );
};

export default AppRouter;
