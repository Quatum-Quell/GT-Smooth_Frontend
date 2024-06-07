import React from 'react';
import HomeIcon from '../assets/homeIcon.svg';
import ProductsIcon from '../assets/productsIcon.svg';
import PaymentsIcon from '../assets/paymentsIcon.svg';
import TransferNavIcon from '../assets/transfersIconNav.svg';
import InvestmentsIcon from '../assets/investmentsIcon.svg';
import { Link } from 'react-router-dom';

const BottomNav = () => {
  return (
    <ul class="sticky w-full bottom-0 left-0 nav bg-[#1F2229] text-[#9B9BA7] text-[9.62px] flex flex-row items-center gap-[25px] pt-[19px] pb-[14.72px] px-[31px]">
      <li className="flex flex-col gap-1 items-center">
        <img src={HomeIcon} alt="home_icon" />
        <Link class="active text-[#F95525] font-bold">Home</Link>
      </li>
      <li className="flex flex-col gap-1 items-center">
        <img src={ProductsIcon} alt="products_icon" />
        <Link>Products</Link>
      </li>
      <li className="flex flex-col gap-1 items-center">
        <img src={PaymentsIcon} alt="payments_icon" />
        <Link>Payments</Link>
      </li>
      <li className="flex flex-col gap-1 items-center">
        <img src={TransferNavIcon} alt="transfer_nav_icon" />
        <Link>Transfers</Link>
      </li>
      <li className="flex flex-col gap-1 items-center">
        <img src={InvestmentsIcon} alt="home" />
        <Link>Investments</Link>
      </li>
    </ul>
  );
};

export default BottomNav;
