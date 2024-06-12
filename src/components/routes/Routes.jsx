import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../home/Home.jsx';

const AppRoutes = () => {
  return (
    <Routes>
      <Route index element={<Home />} />
    </Routes>
  );
};

export default AppRoutes;
