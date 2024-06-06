import React from 'react';
import { ReactComponent as BuyAirtimeIcon } from '../assets/buyAirtimeIcon.svg';
import { ReactComponent as BuyDataIcon } from '../assets/buyDataIcon.svg';
import { ReactComponent as NearMeIcon } from '../assets/nearMeIcon.svg';
import { ReactComponent as TransferIcon } from '../assets/transfer-circle.svg';
import { ReactComponent as EventIcon } from '../assets/eventIcon.svg';
import { ReactComponent as TransportIcon } from '../assets/transportIcon.svg';
import { ReactComponent as InsuranceIcon } from '../assets/insuranceIcon.svg';
import { ReactComponent as TickIcon } from '../assets/tickIcon.svg';

const Features = () => {
  return (
    <div className="sm:w-[375px] bg-[#181820] h-screen">
      <div className="bg-[#1F2229] pt-[54px] text-white text-center w-full pb-4">
        <h2 className="font-semibold text-[20px] leading-none">
          Edit Shortcuts
        </h2>
        <p className="text-xs">
          You can add only four options to your shortcuts.
        </p>
      </div>

      <div className="pt-[56px] pb-[66px] w-[344.47px] mx-auto">
        <div className="grid grid-cols-4 grid-rows-3 gap-x-10 gap-y-[30px]">
          <div className="flex flex-col items-center justify-center gap-1 relative">
            <BuyAirtimeIcon className="h-[48.47px] w-[48.47px]" />
            <p className="text-[#8F8F99] text-[10.54px]">Buy airt...</p>
            <TickIcon className="absolute top-[1px] right-1" />
          </div>

          <div className="flex flex-col items-center justify-center gap-1 relative">
            <BuyDataIcon className="h-[48.47px] w-[48.47px]" />
            <p className="text-[#8F8F99] text-[10.54px]">Buy Data</p>
            <TickIcon className="absolute top-[1px] right-1" />
          </div>

          <div className="flex flex-col items-center justify-center gap-1 relative">
            <TransferIcon className="h-[48.47px] w-[48.47px]" />
            <p className="text-[#8F8F99] text-[10.54px]">Buy airt...</p>
            <TickIcon className="absolute top-[1px] right-1" />
          </div>

          <div className="flex flex-col items-center justify-center gap-1">
            <InsuranceIcon className="h-[48.47px] w-[48.47px]" />
            <p className="text-[#8F8F99] text-[10.54px]">Buy Data</p>
          </div>

          <div className="flex flex-col items-center justify-center gap-1">
            <EventIcon className="h-[48.47px] w-[48.47px]" />
            <p className="text-[#8F8F99] text-[10.54px]">Buy airt...</p>
          </div>

          <div className="flex flex-col items-center justify-center gap-1">
            <TransportIcon className="h-[48.47px] w-[48.47px]" />
            <p className="text-[#8F8F99] text-[10.54px]">Buy Data</p>
          </div>

          <div className="flex flex-col items-center justify-center gap-1 relative">
            <NearMeIcon className="h-[48.47px] w-[48.47px]" />
            <p className="text-[#8F8F99] text-[10.54px]">Buy airt...</p>
            <TickIcon className="absolute top-[1px] right-1" />
          </div>

          <div className="flex flex-col items-center justify-center gap-1">
            <BuyDataIcon className="h-[48.47px] w-[48.47px]" />
            <p className="text-[#8F8F99] text-[10.54px]">Buy Data</p>
          </div>

          <div className="flex flex-col items-center justify-center gap-1">
            <BuyAirtimeIcon className="h-[48.47px] w-[48.47px]" />
            <p className="text-[#8F8F99] text-[10.54px]">Buy airt...</p>
          </div>

          <div className="flex flex-col items-center justify-center gap-1">
            <BuyDataIcon className="h-[48.47px] w-[48.47px]" />
            <p className="text-[#8F8F99] text-[10.54px]">Buy Data</p>
          </div>

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

      <div className="w-full px-4">
        <button className="bg-[#E04403] text-white font-bold w-full flex items-center justify-center h-[47px] rounded-[5px] border border-[#713C34]">
          Save
        </button>
      </div>
    </div>
  );
};

export default Features;
