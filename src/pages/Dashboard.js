import React from "react";
import { ReactComponent as ProfileIcon } from "../assets/profileIcon.svg";
import AccountIcon from "../assets/accountIcon.svg";
import EyeIcon from "../assets/eyeIcon.svg";
import FundIcon from "../assets/fundIcon.svg";
import TransferIcon from "../assets/transferIcon.svg";
import NearMeIcon from "../assets/nearMeIcon.svg";
import BuyAirtimeIcon from "../assets/buyAirtimeIcon.svg";
import BuyDataIcon from "../assets/buyDataIcon.svg";
import ProceedIcon from "../assets/proceedIcon.svg";
import { ReactComponent as SearchIcon } from "../assets/searchIcon.svg";
import { Link } from "react-router-dom";
import BottomNav from "../component/BottomNav";

const Dashboard = () => {
  return (
    <div className="relative bg-[#181820] sm:w-[375px] min-h-screen">
      <div className=" pb-8 flex flex-col gap-[37px] h-full text-white pl-4 pt-[54px]">
        <div className="flex items-center justify-between pr-5">
          <div className="profile flex gap-2 items-center">
            <ProfileIcon />
            <h2 className="font-bold text-[20px]">Hello, Oluwanimofe!</h2>
          </div>

          <Link to="/search">
            <SearchIcon />
          </Link>
        </div>

        <div className="flex justify-between items-center text-[#8E8E98] pr-5">
          <div className="border border-[#8E8E98] p-2 rounded-md text-[14px] leading-tight	tracking-wide">
            Current Account
          </div>

          <div className="border border-[#8E8E98] p-2 rounded-md text-[14px] leading-tight	tracking-wide flex gap-3 items-center">
            <p>0914678549</p>
            <img src={AccountIcon} alt="account_icon" />
          </div>
        </div>

        <div className="flex gap-1.5">
          <div>
            <p className="text-[28px] font-semibold">
              <span className="text-[11px] font-normal mr-0.5">₦</span>
              200,000.
              <span className="text-[11px] font-normal">00</span>
            </p>
          </div>

          <img className="mt-3.5 w-3 mb-0" src={EyeIcon} alt="eye_icon" />
        </div>

        <div className="flex gap-2.5 items-center">
          <p className="text-[#8E8E98] text-[15px]">Book balance</p>
          <p className="mt-0.5 text-[12px]">
            <span className="text-[10px] mr-0.5">₦</span>
            200,000.
            <span className="text-[10px]">00</span>
          </p>
        </div>

        <div className="flex gap-3 items-center">
          <div className="flex gap-[7px] items-center justify-center border border-[#713C34] bg-[#3A2220] rounded-full w-[190px] h-[50px] ">
            <img src={FundIcon} alt="fund_icon" />
            <p className="text-[20px] font-bold text-[#EE5A34]">Fund account</p>
          </div>

          <div className="flex gap-[7px] items-center justify-center border border-[#713C34] bg-[#3A2220] rounded-full w-[149px] h-[50px] ">
            <img src={TransferIcon} alt="transfer_icon" />
            <p className="text-[20px] font-bold text-[#EE5A34]">Transfer</p>
          </div>
        </div>

        <div className="pb-[18px] pr-5">
          <div className="flex items-center justify-between mb-[18px]">
            <h2 className="font-bold text-[22px]">Shortcuts</h2>
            <Link to="/features-list" className="font-bold text-[22px]">
              Edit
            </Link>
          </div>

          <div className="flex gap-[15px] items-center">
            <div className="flex flex-col items-center justify-center">
              <img src={NearMeIcon} alt="" />
              <p className="text-[#8F8F99] text-[15px]">Near me</p>
            </div>

            <div className="flex flex-col items-center justify-center">
              <img src={BuyAirtimeIcon} alt="" />
              <p className="text-[#8F8F99] text-[15px]">Buy airt...</p>
            </div>

            <div className="flex flex-col items-center justify-center">
              <img src={BuyDataIcon} alt="" />
              <p className="text-[#8F8F99] text-[15px]">Buy Data</p>
            </div>
          </div>
        </div>

        <div className="pr-5">
          <div className="flex justify-between items-center pb-4 ">
            <h2 className="font-bold text-[22px] mb-0">Transaction history</h2>
            <div className="flex gap-3 items-center">
              <p className="text-[#8F8F99] text-[15px] font-medium mb-0">
                See more
              </p>
              <img src={ProceedIcon} alt="proceed_icon" />
            </div>
          </div>
          <div>
            <div className="border border-[#2F2F37] bg-[#1F2229] rounded-md px-4 py-3">
              <p className="text-[#8F8F99] mb-3">Yesterday</p>
              <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <div className="flex gap-2 items-center">
                    <img className="w-12" src={BuyDataIcon} alt="" />
                    <div className="flex flex-col">
                      <p className="text-[15px] font-medium">Mtn</p>
                      <p className="text-[15px] text-[#8F8F99]">Data</p>
                    </div>
                  </div>
                  <div>
                    <p className="mt-0.5 text-[13px] text-right">
                      <span className="text-[11px] mr-0.5">-</span>
                      <span className="text-[11px] mr-0.5">₦</span>
                      5,000.
                      <span className="text-[11px]">00</span>
                    </p>
                    <p className="font-[15px] text-[#8F8F99]">
                      <span className="mr-0.5">From</span>
                      <span className="mr-0.5">•</span>
                      8549
                    </p>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex gap-2 items-center">
                    <img className="w-12" src={BuyDataIcon} alt="" />
                    <div className="flex flex-col">
                      <p className="text-[15px] font-medium">Mtn</p>
                      <p className="text-[15px] text-[#8F8F99]">Data</p>
                    </div>
                  </div>
                  <div>
                    <p className="mt-0.5 text-[13px] text-right">
                      <span className="text-[11px] mr-0.5">-</span>
                      <span className="text-[11px] mr-0.5">₦</span>
                      5,000.
                      <span className="text-[11px]">00</span>
                    </p>
                    <p className="font-[15px] text-[#8F8F99]">
                      <span className="mr-0.5">From</span>
                      <span className="mr-0.5">•</span>
                      8549
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <BottomNav />
    </div>
  );
};

export default Dashboard;
