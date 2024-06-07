import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ReactComponent as GTLogo } from '../assets/splashLogo.svg';


const SplashPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      navigate('/login');
    }, 2000);
    return () => clearTimeout(timeoutId);
  });

  return (
    <div className="bg-[#181820] sm:w-[375px] h-screen flex items-center justify-center">
      <GTLogo />
    </div>
  );
};

export default SplashPage;
