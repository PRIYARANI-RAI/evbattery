import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import CheckBatteryPage from './components/CheckBatteryPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/check-battery" element={<CheckBatteryPage />} />
    </Routes>
  );
}

export default App;

