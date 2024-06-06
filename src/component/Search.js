import React, { useState } from 'react';
import { ReactComponent as CancelIcon } from '../assets/cancelIcon.svg';
import { ReactComponent as BackIcon } from '../assets/backArrow.svg';
import { ReactComponent as BuyAirtimeIcon } from '../assets/buyAirtimeIcon.svg';
import { ReactComponent as BuyDataIcon } from '../assets/buyDataIcon.svg';
import { ReactComponent as SearchIcon } from '../assets/searchIcon.svg';
import { ReactComponent as Kuda } from '../assets/kuda-beneficiaries.svg';
import { ReactComponent as UBA } from '../assets/uba-beneficiaries.svg';
import { ReactComponent as Wema } from '../assets/wema-beneficiaries.svg';
import { ReactComponent as Stanbic } from '../assets/stanbic-beneficiaries.svg';
import { ReactComponent as GTBank } from '../assets/gt-beneficiaries.svg';
import { ReactComponent as NearMeIcon } from '../assets/nearMeIcon.svg';
import { ReactComponent as TransferIcon } from '../assets/transfer-circle.svg';
import { ReactComponent as EventIcon } from '../assets/eventIcon.svg';
import { ReactComponent as TransportIcon } from '../assets/transportIcon.svg';
import { ReactComponent as InsuranceIcon } from '../assets/insuranceIcon.svg';
import { ReactComponent as ArrowIcon } from '../assets/white-chevron-right.svg';
import { Link, useNavigate } from 'react-router-dom';

const Search = () => {
  const [searchedData, setSearchedData] = useState(false);
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  console.log(setSearchedData(true))
  return (
    <div className="">
      <div className="bg-[#1F2229] px-4 py-[51px] flex items-center gap-[98.5px] w-full pb-[16.48px]">
        <button
          onClick={goBack}
          className="w-[39.5px] h-[35.52px] flex items-center justify-center"
        >
          <BackIcon />
        </button>
        <h2 className="font-semibold text-[20px] text-white w-full">
          Search
        </h2>
      </div>

      <div className="bg-[#181820] sm:w-[375px] pt-[26px] pb-[116px] min-h-screen">
        <div className="flex items-center mr-[23px] ml-5 bg-[#3A2220] py-2 px-[18px] border border-[#713C34] text-white gap-[23px]">
          <SearchIcon />
          <input
            type="text"
            placeholder="Search for anything"
            className="w-full bg-transparent text-xs text-white placeholder:text-white outline-none"
          />
          <CancelIcon />
        </div>

        {searchedData ? (
          <div className="pt-[27px] flex flex-col gap-[18.53px] h-full px-5">
            <div className="flex items-center justify-between">
              <div className="flex gap-[13px] items-center">
                <BuyAirtimeIcon className="h-[48.47px] w-[48.47px]" />
                <p className="text-white text-xs">Buy airtime</p>
              </div>
              <ArrowIcon />
            </div>

            <div className="flex items-center justify-between">
              <div className="flex gap-[13px] items-center">
                <BuyDataIcon className="h-[48.47px] w-[48.47px]" />
                <p className="text-white text-xs">Buy Data</p>
              </div>
              <ArrowIcon />
            </div>
          </div>
        ) : (
          <div className="pt-[22px] h-full">
            <div className="flex flex-col gap-[17px] pr-[23px] pl-5 mb-[22px]">
              <div className="flex items-center justify-between">
                <h2 className="font-bold text-sm text-white">Beneficiaries</h2>
                <Link to="/" className="font-bold text-sm text-[#EE5A34]">
                  View all
                </Link>
              </div>
              <div className="flex  gap-[13px] h-full ">
                <div className="flex flex-col items-center justify-center gap-[5px]">
                  <Kuda className="h-[39px] w-[39px]" />
                  <p className="text-[8px] text-white">Bankole Olu...</p>
                </div>

                <div className="flex flex-col items-center justify-center gap-[5px]">
                  <UBA className="h-[39px] w-[39px]" />
                  <p className="text-[8px] text-white">Ayomikun O...</p>
                </div>

                <div className="flex flex-col items-center justify-center gap-[5px]">
                  <Wema className="h-[39px] w-[39px]" />
                  <p className="text-[8px] text-white">Sulieman Sh...</p>
                </div>

                <div className="flex flex-col items-center justify-center gap-[5px]">
                  <Stanbic className="h-[39px] w-[39px]" />
                  <p className="text-[8px] text-white">Ayomide Al....</p>
                </div>
                <div className="flex flex-col items-center justify-center gap-[5px]">
                  <GTBank className="h-[39px] w-[39px]" />
                  <p className="text-[8px] text-white">Ayomide Al....</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-3 pr-[23px] pl-5 mb-[15px]">
              <div className="flex items-center gap-2">
                <NearMeIcon className="h-[57.17px] w-[57.17px]" />

                <div className="text-white">
                  <p className="text-[10px] leading-none">Near me</p>
                  <p className="text-[8px] font-light">
                    Send to any GTB account near you
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <TransferIcon className="h-[57.17px] w-[57.17px]" />

                <div className="text-white">
                  <p className="text-[10px] leading-none">Transfer</p>
                  <p className="text-[8px] font-light">Send to other banks </p>
                </div>
              </div>
            </div>

            <div className="mb-3 flex flex-col gap-4">
              <p className="bg-[#1F2229] w-full text-sm font-semibold text-white pl-[22px] py-2">
                Essentials
              </p>
              <div className="flex pl-[18px] gap-[10.54px]">
                <div className="flex flex-col items-center justify-center gap-1">
                  <BuyAirtimeIcon className="h-[48.47px] w-[48.47px]" />
                  <p className="text-[#8F8F99] text-[10.54px]">Buy airt...</p>
                </div>

                <div className="flex flex-col items-center justify-center gap-1">
                  <BuyDataIcon className="h-[48.47px] w-[48.47px]" />
                  <p className="text-[#8F8F99] text-[10.54px]">Buy Data</p>
                </div>
              </div>
            </div>

            <div className="mb-3 flex flex-col gap-4">
              <p className="bg-[#1F2229] w-full text-sm font-semibold text-white pl-[22px] py-2">
                Lifestyle
              </p>
              <div className="flex pl-[18px] gap-[10.54px]">
                <div className="flex flex-col justify-center gap-1">
                  <EventIcon className="h-[48.47px] w-[48.47px]" />
                  <p className="text-[#8F8F99] text-[10.54px]">
                    Events, <br /> Entertiment...
                  </p>
                </div>

                <div className="flex flex-col justify-center gap-1">
                  <TransportIcon className="h-[48.47px] w-[48.47px]" />
                  <p className="text-[#8F8F99] text-[10.54px]">
                    Travel & <br /> Transportation
                  </p>
                </div>

                <div className="flex flex-col items-center justify-center gap-1">
                  <InsuranceIcon className="h-[48.47px] w-[48.47px]" />
                  <p className="text-[#8F8F99] text-[10.54px]">
                    Insurance & <br /> HMO
                  </p>
                </div>
              </div>
            </div>

            <div className="mb-3 flex flex-col gap-4">
              <p className="bg-[#1F2229] w-full text-sm font-semibold text-white pl-[22px] py-2">
                Lifestyle
              </p>
              <div className="flex pl-[18px] gap-[10.54px]">
                <div className="flex flex-col justify-center gap-1">
                  <EventIcon className="h-[48.47px] w-[48.47px]" />
                  <p className="text-[#8F8F99] text-[10.54px]">
                    Events, <br /> Entertiment...
                  </p>
                </div>

                <div className="flex flex-col justify-center gap-1">
                  <TransportIcon className="h-[48.47px] w-[48.47px]" />
                  <p className="text-[#8F8F99] text-[10.54px]">
                    Travel & <br /> Transportation
                  </p>
                </div>

                <div className="flex flex-col items-center justify-center gap-1">
                  <InsuranceIcon className="h-[48.47px] w-[48.47px]" />
                  <p className="text-[#8F8F99] text-[10.54px]">
                    Insurance & <br /> HMO
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Search;
