import React from 'react';
import { Routes, Route } from 'react-router-dom';
import SplashPage from './component/SplashPage';
import Login from './component/Login';
import Dashboard from './component/Dashboard';
import Search from './component/Search';
import Features from './component/Features';

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<SplashPage />} />
      <Route exact path="/login" element={<Login />} />
      <Route exact path="/dashboard" element={<Dashboard />} />
      <Route exact path="/search" element={<Search />} />
      <Route exact path="/features-list" element={<Features />} />
    </Routes>
  );
}

export default App;
