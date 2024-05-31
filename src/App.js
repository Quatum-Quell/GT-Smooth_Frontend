import React from 'react';
import { Routes, Route } from 'react-router-dom';
import SplashPage from './component/SplashPage';
import Login from './component/Login';
import Dashboard from './component/Dashboard';

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<SplashPage />} />
      <Route exact path="/login" element={<Login />} />
      <Route exact path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
}

export default App;
