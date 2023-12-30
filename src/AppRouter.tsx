// AppRouter.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Webpages/Home';
import API from './Webpages/API';

const AppRouter: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/API" element={<API />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
