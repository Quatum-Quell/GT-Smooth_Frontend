import React, { useEffect, useState } from 'react';
import { ReactComponent as UserIcon } from '../assets/userIcon.svg';
import { ReactComponent as FingerPrint } from '../assets/fingerprint.svg';
import { ReactComponent as BackIcon } from '../assets/back.svg';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../services';
import Loader from '../component/Loader';
import { useAuthContext } from '../context/AuthContext';

const Login = () => {
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const maxPasswordLength = 6;
  const navigate = useNavigate();
  const { storeAuthCookie } = useAuthContext();

  const buttons = [
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    <FingerPrint className="h-full" />,
    '0',
    <BackIcon className="h-full" />,
  ];

  const handleButtonClick = (button) => {
    if (typeof button === 'string' && /^\d+$/.test(button)) {
      if (password.length < maxPasswordLength) {
        setPassword((prevPassword) => prevPassword + button);
      }
    } else if (button.type === BackIcon) {
      setPassword((prevPassword) => prevPassword.slice(0, -1));
    }
  };

  const login = async () => {
    setLoading(true);
    try {
      const res = await loginUser(password);
      console.log(res);
      if (res) {
        storeAuthCookie(res);
      }
      navigate('/dashboard');
    } catch (error) {
      alert(error.response.statusText);
      setPassword('');
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (password.length === maxPasswordLength) {
      login();
      console.log('Password submitted:', password);
    }
  });

  return (
    <div className="bg-[#181820] sm:w-[375px] min-h-screen">
      {loading ? (
        <Loader />
      ) : (
        <div className="flex flex-col justify-center items-center gap-[78px] pt-[67px] pb-[35px]">
          <div className="flex flex-col items-center justify-center gap-[21px]">
            <div className="bg-[#1F2229] border-2 border-[#2A2A32] h-[111px] w-[111px] rounded-full flex items-center justify-center">
              <UserIcon />
            </div>
            <p className="text-[#91919B] font-medium">Enter password</p>
            <div className="flex gap-5 items-center">
              {Array(maxPasswordLength)
                .fill(null)
                .map((_, index) => (
                  <div
                    key={index}
                    className={`h-[14px] w-[14px] rounded-full ${
                      password.length > index ? 'bg-[#EC5731]' : 'bg-[#D9D9D9]'
                    }`}
                  ></div>
                ))}
            </div>
          </div>

          <div className="grid grid-row-4 grid-cols-3 gap-y-12 gap-x-[80.24px] w-[241.47px] mx-auto">
            {buttons.map((button, index) => (
              <button
                key={index}
                className="text-[41.41px] font-bold text-white"
                onClick={() => handleButtonClick(button)}
              >
                {button}
              </button>
            ))}
          </div>

          <p className="text-[#EC5731] font-bold text-xl text-center">
            Forgot password?
          </p>
        </div>
      )}
    </div>
  );
};

export default Login;
