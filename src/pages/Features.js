import React, { useEffect, useState } from 'react';
import { ReactComponent as BuyAirtimeIcon } from '../assets/buyAirtimeIcon.svg';
import { ReactComponent as TickIcon } from '../assets/tickIcon.svg';
import { ReactComponent as BackIcon } from '../assets/backArrow.svg';
import { useNavigate } from 'react-router-dom';
import BottomNav from '../component/BottomNav';
import { useAuthContext } from '../context/AuthContext';
import { getFeaturesByUser } from '../services';
import Loader from '../component/Loader';

const Features = () => {
  const [features, setFeatures] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useAuthContext();
  const goBack = () => {
    navigate(-1);
  };

    useEffect(() => {
      const getUserDetails = async () => {
        setLoading(true);
        try {
          const res = await getFeaturesByUser(id);
          setFeatures(res);
        } catch (error) {
          console.log(error);
        } finally {
          setLoading(false);
        }
      };
      getUserDetails();
    }, [id]);
  
  return (
    <div className="sm:w-[375px] bg-[#181820] min-h-screen">
      {loading ? (
        <Loader />
      ) : (
        <div className="sm:w-[375px] bg-[#181820] min-h-screen">
          <div className="pb-8">
            <div className="bg-[#1F2229] px-4 py-[51px] flex w-full pb-[16.48px]">
              <button
                onClick={goBack}
                className="w-[39.5px] h-[35.52px] flex items-center justify-center"
              >
                <BackIcon />
              </button>
              <div className="flex flex-col w-full text-white text-center">
                <h2 className="font-semibold text-[20px] leading-none">
                  Edit Shortcuts
                </h2>
                <p className="text-xs">
                  You can add only four options to your shortcuts.
                </p>
              </div>
            </div>

            <div className="pt-[56px] pb-[66px] w-[344.47px] mx-auto">
              <div className="grid grid-cols-4 gap-x-10 gap-y-[30px] h-auto">
                {features.map((item) => (
                  <div
                    className="flex flex-col items-center gap-1 relative"
                    key={item.id}
                  >
                    <img
                      src={item.icon}
                      alt="icon"
                      className="h-[48.47px] w-[48.47px]"
                    />
                    <p className="text-[#8F8F99] text-[10.54px] text-wrap w-[87px] text-center">
                      {item.featureName}
                    </p>
                    {item.isSelected && (
                      <TickIcon className="absolute top-[1px] right-1" />
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className="w-full px-4">
              <button className="bg-[#E04403] text-white font-bold w-full flex items-center justify-center h-[47px] rounded-[5px] border border-[#713C34]">
                Save
              </button>
            </div>
          </div>
          <BottomNav />
        </div>
      )}
    </div>
  );
};

export default Features;
