import React from 'react';
import { Routes, Route } from 'react-router-dom';
import SplashPage from './pages/SplashPage';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Search from './pages/Search';
import Features from './pages/Features';

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
